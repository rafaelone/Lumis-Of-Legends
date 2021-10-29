import React, {ReactElement, useRef} from 'react';
import {FormHandles} from '@unform/core';
import {Form} from '@unform/web';
import {FiArrowRight, FiUser} from 'react-icons/fi';
import {RiLockPasswordLine} from 'react-icons/ri';
import * as Yup from 'yup';
import {useHistory} from 'react-router-dom';
import {Aside, ButtonLogin, ContainerSignIn} from './styles';
import {Input} from '../../components/Input';
import {getValidationErros} from '../../utils/getValidationErros';

import Logo from '../../assets/images/logo.png';
import {useAuth} from '../../hooks/auth';

type FormData = {
  username: string;
  password: string;
};

export function SignIn(): ReactElement {
  const formRef = useRef<FormHandles>(null);

  const {signIn, signOut} = useAuth();
  const history = useHistory();

  async function handleSubmit(data: FormData): Promise<void> {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        username: Yup.string().required('Invalid username'),
        password: Yup.string().required('Invalid password'),
      });

      await schema.validate(data, {abortEarly: false});

      await signIn(data);

      history.push('/');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErros(err);
        formRef.current?.setErrors(errors);
      }
    }
  }

  return (
    <ContainerSignIn>
      <Aside>
        <img src={Logo} alt="Lolzin" />
        <span> Sign in</span>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="username"
            placeholder="USERNAME"
            id="username"
            icon={FiUser}
          />
          <Input
            type="password"
            name="password"
            placeholder="PASSWORD"
            id="password"
            icon={RiLockPasswordLine}
          />
          <ButtonLogin type="submit">
            <FiArrowRight color="#fff" size={52} />
          </ButtonLogin>

          <small>
            Enter a fictitious username! This application is not connected with
            Riot Games APIS because of its usage policy.
          </small>
        </Form>
        <button type="button" onClick={signOut}>
          Sair
        </button>
      </Aside>
    </ContainerSignIn>
  );
}

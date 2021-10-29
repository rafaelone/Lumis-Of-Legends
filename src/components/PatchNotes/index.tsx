import React, {ReactElement, useEffect, useState} from 'react';
import moment from 'moment';
import {api} from '../../services/api';
import {Container} from './styles';

type PatchNotes = {
  id: string;
  introducao: string;
  titulo: string;
  detalhes: string;
  publishStartDate: {
    rawValue: number;
  };
};

export function PatchNotes(): ReactElement {
  const [patchNotes, setPatchNotes] = useState<PatchNotes[]>([]);

  useEffect(() => {
    async function getPatchNotes(): Promise<void> {
      try {
        const response = await api.get(
          '/lumis/api/rest/patchnotes/lumgetdata/list',
          {
            withCredentials: true,
          },
        );

        setPatchNotes(response.data.rows);
      } catch (err) {
        console.log(err.response);
      }
    }

    getPatchNotes();
  }, []);

  return (
    <Container>
      {patchNotes.map(patch => (
        <React.Fragment key={patch.id}>
          <strong key={patch.id}>{patch.titulo}</strong>
          <span className="date">
            {moment(patch.publishStartDate.rawValue).format('DD/MM/YYYY')}
          </span>
          <span>{patch.introducao}</span>
          <div dangerouslySetInnerHTML={{__html: patch.detalhes}} />

          <div />
        </React.Fragment>
      ))}
    </Container>
  );
}

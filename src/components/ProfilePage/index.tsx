import React from 'react';

import Feed from '../Feed'

import { Container,
         Banner,
         Avatar,
         ProfileData,
         LocationIcon,
         CakeIcon,
         Followage,
         EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined> Editar Perfil </EditButton>
        <h1> Caio César de Magalhães </h1>
        <h2>@caiocmbastos</h2>

        <p>
          Developer at <a href="https://marica.rj.gov.br">Prefeitura Municipal de Maricá</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
              Maricá, Rio de Janeiro, Brasil
          </li>
          <li>
            <CakeIcon />
              Nascido em 08 de Julho de 1995
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong> 94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;
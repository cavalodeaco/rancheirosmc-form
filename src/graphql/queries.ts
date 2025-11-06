import { gql } from '@apollo/client';

// Query para buscar cidades públicas
export const GET_PUBLIC_CITIES = gql`
  query GetPublicCities {
    publicCities {
      id
      name
    }
  }
`;

// Mutation para criar inscrição pública
export const CREATE_PUBLIC_ENROLLMENT = gql`
  mutation CreatePublicEnrollment($input: PublicEnrollmentInput!) {
    createPublicEnrollment(input: $input) {
      message
      enrollmentId
    }
  }
`;

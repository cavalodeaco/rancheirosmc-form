import { useMutation } from '@apollo/client';
import { CREATE_PUBLIC_ENROLLMENT } from '../graphql/queries';

interface PublicEnrollmentData {
  user: {
    name: string;
    phone: string;
    driverLicense: string;
    driverLicenseUF: string;
    email?: string;
  };
  enroll: {
    cityId: string;
    motorcycle: {
      brand: string;
      model: string;
    };
    use: string;
  };
}

export function useCreatePublicEnrollment() {
  const [createEnrollment, { loading, error }] = useMutation(CREATE_PUBLIC_ENROLLMENT);

  const submitEnrollment = async (data: PublicEnrollmentData) => {
    try {
      const result = await createEnrollment({
        variables: {
          input: {
            user: data.user,
            enroll: data.enroll,
          },
        },
      });
      
      const response = result.data?.createPublicEnrollment;
      
      // Verificar se a inscrição foi criada com sucesso
      if (response?.message === 'enrolled') {
        return {
          success: true,
          data: response,
          status: 'enrolled'
        };
      } else if (response?.message === 'waiting') {
        return {
          success: true,
          data: response,
          status: 'waiting'
        };
      } else {
        return {
          success: false,
          error: new Error('Resposta inválida do servidor'),
        };
      }
    } catch (err) {
      return {
        success: false,
        error: err,
      };
    }
  };

  return {
    submitEnrollment,
    loading,
    error,
  };
}

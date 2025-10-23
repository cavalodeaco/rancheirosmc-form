import { useQuery } from '@apollo/client';
import { GET_PUBLIC_CITIES } from '../graphql/queries';

export function usePublicCities() {
  const { data, loading, error } = useQuery(GET_PUBLIC_CITIES);

  return {
    cities: data?.publicCities || [],
    loading,
    error,
  };
}

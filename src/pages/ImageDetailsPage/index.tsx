import { useParams } from 'react-router-dom';
import { usePexelsPhotoDetails } from '@/hooks/usePexelsPhotoDetails';
import { ImageDetails } from '@/components/ImageDetails';
import { ImageDetailsSpinner } from '@/components/ImageDetails/ImageDetailsSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';
import { NoDataMessage } from '@/components/NoDataMessage';

export const ImageDetailsPage: React.FC<{}> = () => {
  const { id } = useParams();
  const { loading, error, data } = usePexelsPhotoDetails({ id: id ?? '' });

  if (loading) return <ImageDetailsSpinner />;
  if (error) return <ErrorMessage />;
  if (data) return <ImageDetails image={data} />;
  
  return <NoDataMessage />;
};

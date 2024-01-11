import { useParams } from 'react-router-dom';

function AdSaleDetail({ add = false }) {
  const { id } = useParams();

  console.log('id', id);

  return <div>sale detail</div>;
}
export default AdSaleDetail;

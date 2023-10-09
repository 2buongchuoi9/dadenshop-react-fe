import { Link } from 'react-router-dom';
const imgKhuyenMai = [
  'https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/ocb-sliding-uudaithanhtoan.png',
  'https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/Sliding-vpbank-bew0995.png',
  'https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/banner-sli-vib.png',
  'https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/banner-uu-dai-shopeepay.png',
];
function CTKhuyenMai() {
  return (
    <>
      {imgKhuyenMai.map((v) => (
        <div key={v} style={{ margin: '20px' }}>
          <Link>
            <img src={v} alt="v" style={{ borderRadius: '10px', float: 'left', height: 'auto', maxWidth: '100%' }} />
          </Link>
        </div>
      ))}
    </>
  );
}
export default CTKhuyenMai;

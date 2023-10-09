import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '~/components/Button';
import CheckBoxField from '~/components/form-control/CheckBoxField';
import InputField from '~/components/form-control/InputField';

function FormRegister() {
  const initalValues = {
    ten: '',
    soDT: '',
    cc: true,
    cc1: true,
    pass: '',
    passagain: '',
  };

  const validate = Yup.object().shape({
    ten: Yup.string().required('(*) chưa nhập tên'),
    email: Yup.string()
      .required('(*) chưa nhập email')
      .matches('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$', '(*) email không đúng định dạng'),
    cc: Yup.boolean().required('(*) chưa chấp nhận điều khoản'),
    soDT: Yup.string(),
    pass: Yup.string()
      .required('(*) chưa nhập mật khẩu')
      .min(6, '(*) mật khẩu phải chứa ít nhất 6 ký tự')
      .matches('^(?=.*[0-9])(?=.*[A-Z]).*$', '(*) mật khẩu phải chứa ít nhất chữ in hoa, 1 chữ số'),
    passagain: Yup.string()
      .required('(*) chưa nhập mật khẩu')
      .oneOf([Yup.ref('pass'), null], '(*) mật khẩu không khớp'),
  });

  return (
    <div>
      <Formik initialValues={initalValues} validationSchema={validate}>
        {(formikProps) => {
          const { values, errors, touched } = formikProps;
          console.log({ values, errors, touched });

          return (
            <Form>
              <FastField name="ten" component={InputField} title="Nhập họ và tên" />
              <FastField name="soDT" pattern="[0-9]{13}" component={InputField} title="Nhập số điện thoại" />
              <FastField
                name="email"
                type="text"
                // mota="(*) Hóa đơn VAT khi mua hàng sẽ được gửi qua email này"
                component={InputField}
                title="Nhập email"
              />
              <FastField
                name="pass"
                type="password"
                eye
                // mota="(*) Mật khẩu phải nhiều hơn 8 ký tự, ít nhất 1 chữ thường 1 chữ in hoa, 1 chữ số, 1 ký tự đặc biệt"
                component={InputField}
                title="Nhập mật khẩu"
              />
              <FastField name="passagain" type="password" eye component={InputField} title="Nhập lại mật khẩu" />
              <FastField
                name="cc"
                type="checkbox"
                component={CheckBoxField}
                label="Tôi đồng ý với các điều khoản bảo mật cá nhân"
              />
              <FastField
                name="cc1"
                type="checkbox"
                component={CheckBoxField}
                label="Đăng ký nhận bản tin khuyến mãi qua email"
              />

              <Button
                typ="submit"
                width={'100%'}
                size="l"
                style={{ background: 'var(--color_primary)', color: '#fff', padding: '11px 0', marginTop: '10px' }}
              >
                Đăng ký
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
export default FormRegister;

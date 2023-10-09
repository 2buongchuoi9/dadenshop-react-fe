import { FastField, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button';
import InputField from '~/components/form-control/InputField';
import * as Yup from 'yup';
import { authAction, selectIsLogging } from '~/app/slice/authSlice';
import LoadingPage from '~/components/LoadingPage/LoadingPage';

function FormLogin() {
  const isLogin = useSelector(selectIsLogging);

  const initalValues = {
    email: '',
    pass: '',
  };
  const validate = Yup.object().shape({
    email: Yup.string().required('(*) chưa nhập email'),
    // .matches('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$', '(*) email không đúng định dạng'),

    pass: Yup.string().required('(*) chưa nhập mật khẩu').min(6, '(*) mật khẩu phải chứa ít nhất 6 ký tự'),
  });
  const dispatch = useDispatch();

  const handleOnSubmit = (values) => {
    dispatch(authAction.login(values));
  };

  return (
    <div>
      <button
        onClick={() => {
          dispatch(authAction.logout());
        }}
      >
        logout
      </button>

      <Formik initialValues={initalValues} onSubmit={handleOnSubmit} validationSchema={validate}>
        {(formikProps) => {
          const { values, errors, touched } = formikProps;
          // console.log({ values, errors, touched });
          // dispatch(login({ values }));

          return (
            <Form>
              <FastField name="email" component={InputField} title="Nhập email" />
              <FastField name="pass" type="password" eye component={InputField} title="Nhập mật khẩu" />

              <p
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  fontSize: '14px',
                  margin: '15px 0',
                  color: '#777',
                }}
              >
                Quên mật khẩu?
              </p>

              <Button
                type="submit"
                width={'100%'}
                size="l"
                style={{ background: 'var(--color_primary)', color: '#fff', padding: '11px 0' }}
              >
                Đăng nhập
              </Button>
              {isLogin && <LoadingPage />}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
export default FormLogin;

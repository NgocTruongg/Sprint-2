import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router";
import "../../css/login.css"
import {login} from "../../service/login/loginService";
import Swal from "sweetalert2"

export function Login() {
    const navigate = useNavigate();
    const [failedAccount, setFailedAccount] = useState(null);

    if (!!sessionStorage.getItem("token")) {
        navigate('/');
        return null;
    }
    return (
        <div id="login-auto" >
            <div className="inner">
                <Formik
                    initialValues={{
                        accountName: "",
                        accountPassword: ""
                    }}
                    validationSchema={Yup.object().shape({
                        accountName: Yup.string().required("Vui lòng nhập tên tài khoản")
                            .min(4, "Tên tài khoản quá ngắn, phải từ 4 ký tự")
                            .max(100, "Tên tài khoản quá dài")
                            .trim()
                            .matches(/^[a-zA-Z0-9]{4,100}$/,
                                "Tên tài khoản không chứa dấu, kí tự đặc biệt và khoảng cách"
                            ),
                        accountPassword: Yup.string().trim()
                            .min(8, "Mật khẩu ít nhất 8 ký tự")
                            .max(28, "Mật khẩu tối đa 28 ký tự")
                            .matches(/^[^\s!#$%^&*()]+$/,
                                "Mật khẩu không chứa khoảng cách , dấu và các kí tự đặc biệt trừ @"
                            )
                            .required("Vui lòng nhập mật khẩu tài khoản")
                    })}
                    onSubmit={(values) => {
                        login(values)
                            .then((e) => {
                                console.log(e)
                                sessionStorage.setItem('TOKEN', e.token);
                                sessionStorage.setItem('USERNAME', e.username);
                                sessionStorage.setItem('ROLES', e.roles[0].authority);
                                Swal.fire({
                                    title: 'Thông báo',
                                    text: 'Đăng nhập thành công!',
                                    icon: 'success',
                                    confirmButtonText: 'OK'
                                })
                                navigate("/")
                            })
                            .catch(() => {
                                    setFailedAccount("Tên tài khoản hoặc mật khẩu không đúng")
                                }
                            );
                    }}
                >
                    <Form>
                        <>
                            <div>
                                <h3>Đăng nhập</h3>
                                <div>
                                    <Field type="text" className="form-control form-custom"
                                           placeholder="Tên đăng nhập"
                                           name="accountName"/>
                                    <ErrorMessage name="accountName" className="text-danger col-12"
                                                  component="span"/>
                                </div>
                                <div className="form-wrapper">
                                    <Field type="password" className="form-control form-custom form-pw"
                                           placeholder="Mật khẩu" name="accountPassword"/>

                                    <ErrorMessage name="accountPassword" className="text-danger col-12"
                                                  component="span"/>
                                    {failedAccount && (
                                        <span className="text-danger col-12">{failedAccount}</span>
                                    )}
                                </div>
                                <div className="mb-3 float-end">
                                    <a className="text-forgot-password text-decoration-none">Quên mật khẩu?</a>
                                </div>
                                <button type="submit" className="login mt-3 w-100 text-center fw-bold">
                                    Đăng nhập
                                </button>
                            </div>
                        </>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
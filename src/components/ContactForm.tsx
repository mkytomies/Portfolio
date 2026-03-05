import { Formik, Form, Field, ErrorMessage } from 'formik';
import type { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import './styles/ContactForm.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

interface ContactFormProps {
    onSubmit: (values: FormValues) => void | Promise<void>;
}

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

const ContactForm = ({onSubmit}: ContactFormProps) => {
    const initialValues: FormValues = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    };

    const handleSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
        onSubmit(values);
        setSubmitting(false);
    }

    return(
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    handleSubmit(values, actions);
                }}
            >
                <Form className='form'>
                    <div className='names'>
                        <div className='nameDiv'>
                            <Field
                                className='field'
                                id="firstName"
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                autocompelete="off"
                            />
                            <ErrorMessage 
                                name='firstName' 
                                component='div' 
                                className='error' 
                                data-testid="fnameErr" 
                            />
                        </div>
                        <div className='nameDiv'>
                            <Field
                                className='field'
                                id="lastName"
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                autocompelete="off"
                            />
                            <ErrorMessage 
                                name='lastName' 
                                component='div' 
                                className='error' 
                                data-testid="lnameErr" 
                            />
                        </div>
                    </div>
                    <Field 
                        className='field' 
                        id="email" 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        autocompelete="off"
                    />
                    <ErrorMessage 
                        name='email' 
                        component='div' 
                        className='error' 
                        data-testid="emailErr"
                    />
                    <Field 
                        className='field' 
                        id="message" 
                        type="text" 
                        name="message" 
                        placeholder="Message" 
                        autocompelete="off"
                    />
                    <ErrorMessage 
                        name='message' 
                        component='div' 
                        className='error' 
                        data-testid="messageErr" 
                    />
                    <div className='buttonContainer'>
                        <button className='submitButton' type='submit'>Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default ContactForm;
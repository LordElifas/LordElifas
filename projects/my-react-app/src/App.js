import * as Yup from 'yup';
import { Field, Formik, Form } from "formik";

// styles
import styles from './App.module.css';

// constants
import { EMPTY_FIELD_VALIDATION_HINT, FAILED_LENGTH_VALIDATION_HINT, FAILED_VALIDATION_HINT } from "./hints";
import { AGE_CONSTRAINTS } from "./validationConstraints";
import { EMAIL_MATCH_REGEXP } from "./regExps";

function App() {
  const ValidationSchema = Yup.object().shape({
    email: Yup.string().trim().matches(EMAIL_MATCH_REGEXP).required(),
    name: Yup.string().min(2, FAILED_LENGTH_VALIDATION_HINT.name.min)
        .max(25, FAILED_LENGTH_VALIDATION_HINT.name.max)
        .required(EMPTY_FIELD_VALIDATION_HINT.last_name),
    surname: Yup.string().min(2, FAILED_LENGTH_VALIDATION_HINT.name.min)
        .max(25, FAILED_LENGTH_VALIDATION_HINT.name.max)
        .required(EMPTY_FIELD_VALIDATION_HINT.last_name),
    age: Yup.number().integer(FAILED_VALIDATION_HINT.integer)
        .min(AGE_CONSTRAINTS.userMinAge, FAILED_VALIDATION_HINT.age)
        .max(AGE_CONSTRAINTS.userMaxAge, FAILED_VALIDATION_HINT.age)
        .required(EMPTY_FIELD_VALIDATION_HINT.age),
    password: Yup.string().trim().matches().required()
  })

  const handleSubmit = () => {
    console.log('sdgsgsd')
  }

  return (
    <Formik
        initialValues={{
      email: '', name: '', surname: '', age: '', password: '', gender: '',
    }} onSubmit={handleSubmit}
    validationSchema={ValidationSchema}
    >
      {({ errors, dirty, touched}) => (
        <Form>
            <div className={styles.inputContainer}>
               <div className={styles.inputBox}>
                 <Field type="email" name="email" className={`${styles.defaultInput} ${
                     errors.email && touched.email
                         ? styles.errorInput
                         : !errors.email && touched.email
                             ? styles.validateInput
                             : null
                 }`}
                 />
                 <div className={styles.hintBox}>
                   {errors.email && touched.email ? (
                       <p className={styles.errorHint}>
                         {errors.email}
                       </p>
                   ) : !errors.email && touched.email ? (
                       <p className={styles.trueHint}>
                         Perfect
                       </p>
                   ) : null}
                 </div>
               </div>
              <div className={styles.inputBox}>
                <Field type="text" name="name" className={`${styles.defaultInput} ${
                    errors.name && touched.name
                        ? styles.errorInput
                        : !errors.name && touched.name
                            ? styles.validateInput
                            : null
                }`}/>
                <div className={styles.hintBox}>
                  {errors.name && touched.name ? (
                      <p className={styles.errorHint}>
                        {errors.name}
                      </p>
                  ) : !errors.name && touched.name ? (
                      <p className={styles.trueHint}>
                        Perfect
                      </p>
                  ) : null}
                </div>
              </div>
              <div className={styles.inputBox}>
                <Field type="text" name="surname" className={`${styles.defaultInput} ${
                    errors.surname && touched.surname
                        ? styles.errorInput
                        : !errors.surname && touched.surname
                            ? styles.validateInput
                            : null
                }`}/>
                <div className={styles.hintBox}>
                  {errors.surname && touched.surname ? (
                      <p className={styles.errorHint}>
                        {errors.surname}
                      </p>
                  ) : !errors.surname && touched.surname ? (
                      <p className={styles.trueHint}>
                        Perfect
                      </p>
                  ) : null}
                </div>
              </div>
              <div className={styles.inputBox}>
                <Field type="number" name="age" className={`${styles.defaultInput} ${
                    errors.surname && touched.surname
                        ? styles.errorInput
                        : !errors.surname && touched.surname
                            ? styles.validateInput
                            : null
                }`}/>
                <div className={styles.hintBox}>
                  {errors.surname && touched.surname ? (
                      <p className={styles.errorHint}>
                        {errors.surname}
                      </p>
                  ) : !errors.surname && touched.surname ? (
                      <p className={styles.trueHint}>
                        Perfect
                      </p>
                  ) : null}
                </div>
              </div>
              <div className={styles.dataBox}>
                <Field type="date" name="date" />
              </div>
              <div className={styles.radioBox}>
                <Field type="radio" value="male" name="gender" />
                <Field type="radio" value="female" name="gender" />
              </div>
            </div>
          <div className={styles.buttonBox}>
            <button className={styles.button} disabled={dirty || errors}>Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default App;

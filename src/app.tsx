import { Navigate, Route, Routes } from 'react-router-dom';
import { LayoutMain } from '@pages/layouts/layout-main/layout-main';
import { Auth } from '@pages/auth/auth';
import { LayoutAuth } from '@pages/layouts/auth-layout/layout-auth';
import { ResultComponent } from '@components/result-component/result-component';
import ConfirmEmail from '@pages/confirm-email/confirm-email';
import ChangePassword from '@pages/change-password/change-password';
import { MainPage } from './pages';
import ProtectedRoute from '@components/protected-route/protected-route';
import { Paths } from '@constants/api';
import { useAppSelector } from './hooks';



const App = () => {
  const { previousLocations } = useAppSelector((state) => state.router);
  const { accessToken } = useAppSelector((state) => state.user);

  return (
      <>
          <Routes>
              <Route path='/' element={<LayoutMain />}>
                  <Route
                      element={
                          <ProtectedRoute isAllowed={!!accessToken} redirectPath={Paths.LOGIN} />
                      }
                  >
                      <Route path='/' element={<Navigate to={Paths.MAIN} replace />} />
                      <Route path={Paths.MAIN} element={<MainPage />} />
                  </Route>
                  <Route
                      element={
                          <ProtectedRoute isAllowed={!accessToken} redirectPath={Paths.MAIN} />
                      }
                  >
                      <Route path={Paths.LOGIN} element={<LayoutAuth />}>
                          <Route index element={<Auth />} />
                          <Route path={Paths.REGISTRATION} element={<Auth />} />
                          <Route path={Paths.CONFIRM_EMAIL} element={<ConfirmEmail />} />
                          <Route path={Paths.CHANGE_PASSWORD} element={<ChangePassword />} />
                      </Route>
                  </Route>

                  <Route
                      element={
                          <ProtectedRoute
                              isAllowed={!(!previousLocations || previousLocations?.length === 1)}
                              redirectPath={Paths.MAIN}
                          />
                      }
                  >
                      <Route path={Paths.RESULT} element={<LayoutAuth />}>
                          <Route path={Paths.SUCCESS} element={<ResultComponent />} />
                          <Route path={Paths.ERROR} element={<ResultComponent />} />
                          <Route path={Paths.ERROR_USER_EXIST} element={<ResultComponent />} />
                          <Route path={Paths.ERROR_LOGIN} element={<ResultComponent />} />
                          <Route
                              path={Paths.ERROR_CHECK_EMAIL_NO_EXIST}
                              element={<ResultComponent />}
                          />
                          <Route path={Paths.ERROR_CHECK_EMAIL} element={<ResultComponent />} />
                          <Route path={Paths.ERROR_CHANGE_PASSWORD} element={<ResultComponent />} />
                          <Route path={Paths.SUCCESS_CHANGE_PASSWORD} element={<ResultComponent />} />
                      </Route>
                  </Route>
              </Route>
          </Routes>
      </>
  );
}

export default App

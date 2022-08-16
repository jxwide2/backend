import '../styles/globals.css'
import {createUsersTable} from "../components/db/db client/user-schema";

function MyApp({ Component, pageProps }) {
  createUsersTable();

  return <Component {...pageProps} />
}

export default MyApp

import SyncLoader from 'react-spinners/SyncLoader'
import styles from './Spinner.module.css'

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
}

function Spinner() {
  return (
    <div className={styles.sweetLoading}>
      <SyncLoader cssOverride={override} size={15} />
    </div>
  )
}

export default Spinner

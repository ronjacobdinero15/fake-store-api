import styles from './Button.module.css'

function Button({ children, type, onClick, style = '120px' }) {
  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      style={{ width: style }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

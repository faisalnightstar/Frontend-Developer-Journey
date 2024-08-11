import styles from './Buttons.module.css'

const Buttons = () => {

    const ButtonsNames = ['C','()','%','9','8','÷','7','6','x','5','4','-','3','2','+','1','0','=']
    return <div className={styles.buttonContainer}>

        {ButtonsNames.map((buttons) => ( <button key={buttons} className={styles.button}>{buttons}</button>))}

  </div>
}

export default Buttons;
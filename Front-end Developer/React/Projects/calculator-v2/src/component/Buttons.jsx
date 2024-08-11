import styles from './Buttons.module.css'

const Buttons = ({onButtonClick}) => {

    const ButtonsNames = ['C','()','%','9','8','÷','7','6','x','5','4','-','3','2','+','1','0','=']
    return <div className={styles.buttonContainer}>

        {ButtonsNames.map((buttonName) => ( <button key={buttonName} className={styles.button} onClick={(buttonText) => onButtonClick(buttonName)}>{buttonName}</button>))}

  </div>
}

export default Buttons;
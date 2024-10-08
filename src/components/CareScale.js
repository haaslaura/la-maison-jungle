import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

// const {scaleValue, careType} = props
// function CareScale(props) {

function alertMessage(level, type) {

    const intensity = level === 3 ? 'beaucoup' : (level === 2 ? 'modérement' : 'peu')
    const need = type === 'light' ? 'de lumière' : "d'arrosage"
    
    alert(`Cette plante requiert ${intensity} ${need}`)
}


function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? (
        <img src={Sun} alt='sun-icon'/>
    ) : (
        <img src={Water} alt='water-icon'/>
    )
    
    return (
        <div onClick={() => alertMessage(scaleValue, careType)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}

export default CareScale
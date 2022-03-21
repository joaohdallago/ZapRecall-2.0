import logoPng from '../../assets/logo.png' 

export default function Logo() {
    return (
        <div>
            <img src={logoPng} alt="logo" />
            <span>ZapRecall</span>
        </div>
    )
}

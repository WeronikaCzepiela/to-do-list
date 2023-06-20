import './App.scss';
import GitHub from './images/GitHub.png'
import LinkdedIn from './images/LinkedIn.png'

const App = () => {


    return (
        <div className="App">
            <div className={'top'}>
                <h1>'To Do' Lista</h1>
            </div>
            <div className={'List'}>
            </div>
            <div className={'add-Text'}>
                <textarea className={'enter-text'} placeholder={'Wpisz nazwę zadania'}></textarea>
                <button>Dodaj</button>
            </div>
            <div className={'bottom'}>
                <p>Check my accounts</p>
                <a target={'_blank'} href={'https://github.com/WeronikaCzepiela'}>
                    {' '}
                    <img src={GitHub}/>{' '}
                </a>
                <a target={'_blank'} href={'https://www.linkedin.com/in/--weronika-czepiela/'}>
                    {' '}
                    <img src={LinkdedIn}/>
                </a>
            </div>
        </div>
    );
}

export default App;

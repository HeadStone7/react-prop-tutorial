import './App.css';
import data from './data'
import AnimalCard from "../AnimalCard/AnimalCard";


function showAdditional(additional) {
    const alertInformation = Object.entries(additional)
        .map(information => `${information[0]}: ${information[1]}`)
        .join('\n');
    alert(alertInformation)
};

function App() {
    return (
        <div className="wrapper">
            <h1>Animals</h1>
            {data.map(animal =>
            <AnimalCard key={animal.name}
                        name={animal.name}
                        additional={animal?.additional}
                        scientificName={animal.scientificName}
                        size={animal.size}
                        diet={animal.diet}
                        showAdditional={showAdditional}/>)}
        </div>
    );
}

export default App;

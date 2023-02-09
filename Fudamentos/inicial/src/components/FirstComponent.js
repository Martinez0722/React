// arquivo de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return (
        <div>
            {/* comentario */}
            <h1>Meu primeiro componente</h1>
            <p>Meu texto</p>
            <MyComponent /> 
        </div>
    );
};

export default FirstComponent;
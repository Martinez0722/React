const TemplateExpressions = () => {

    const name = 'Jakub';
    const data = {
        age: 31,
        job: 'Programmer',
    };

    return (
        <div>
            <h1>Olá {name}, tudo bom ?</h1>
            <p>Você atua como {data.job}</p>
        </div>
    )
}

export default TemplateExpressions
function CardCausa({ causa }) {

    function unirseCausa() {
        alert("uniser a la cuasa")
    }
    function donar() {
        alert("donar")
    }
    return (
        <div className="causa-card">
            <div className="imgen">
                <img src={causa.url} alt={causa.titulo} />
            </div>
            <div className="titulo-causa"><p className="p-titulo">{causa.titulo}</p></div>
            <div className="categoria">{causa.categoria}</div>
            <div className="barra-progreso"></div>
            <a className="btn-info" href="causa.urlFnfo">Más información</a>
            <div className="btn-voluntarios" onClick={unirseCausa}></div>
            <div className="btn-donar" onClick={donar}></div>
        </div>
    )
}
export default CardCausa;
const CardInfo = ({empresa, descricao}) => {
    return (
        <div className="container col-xxl-8 px-4 py-5">
          <div className="divGroup row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="divContent col-10 col-sm-8 col-lg-6">
              <div className="divContent col-lg-6">
                <h3 className="display-7 fw-bold lh-1 mb-3">{empresa}</h3>
                <p className="lead">{descricao}</p>
                <div className="divButton d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Saiba mais</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default CardInfo;
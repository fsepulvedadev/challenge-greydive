import { useEffect } from "react";
import ReactPlayer from "react-player";

const PaginaCaso = (data) => {
  useEffect(() => {
    document.title = data.data.cliente.toUpperCase();
  }, []);

  console.log(data.data);

  return (
    <div className="h-full fondo-simulacr">
      <main className="flex justify-center flex-col items-center text-white font-bold px-5">
        <div className=" text-3xl">
          <h2 className=" uppercase text-center">{data.data.cliente}</h2>
          <h2 className="">Test: Usabilidad en el sitio web.</h2>
        </div>
        <div className="text-xl my-5">
          <h1 className="my-2">Testeador 1</h1>
          <ReactPlayer
            className="react-player"
            url={data.data.linkVideo}
            controls={true}
            width="100%"
            heigth="100%"
          />
        </div>

        <h1 className="text-4xl">Transcripcion</h1>

        <div className="md:w-1/2 w-full border-2 rounded overflow-y-scroll h-52 my-4 p-4">
          {/* El texto de transcripcion tiene algunas etiquetas br embebidas,
          entonces decidi injectarlo como html para que se utilicen. */}
          <p
            dangerouslySetInnerHTML={{
              __html: data.data.transcripcion,
            }}
          ></p>
        </div>

        <div className="flex flex-col justify-center w-full items-center my-4">
          <h1 className="text-4xl my-4">Tareas</h1>

          <div className="md:w-1/2 text-center h-[22rem] overflow-auto rounded border p-2">
            {data.data.preguntas.map((pregunta, index) => (
              <div
                className="border-2 border-[#292643] my-2 rounded"
                key={index}
              >
                <h2 className="bg-[#292643]">{`Tarea ${index + 1}`}</h2>
                <div className="p-2">
                  <p>{pregunta.texto}</p>
                  <p>Respuesta {pregunta.respuesta}</p>
                  <p>Duracion de la Tarea {pregunta.tiempo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaginaCaso;

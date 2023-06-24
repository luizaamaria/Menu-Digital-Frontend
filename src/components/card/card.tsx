import { useFoodDataDelete } from "../../hooks/useFoodDataDelete";
import "./card.css"

interface CardProps {
  price: number,
  title: string,
  image: string
  id: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-empty-pattern
export function Card({ price, image, title, id} : CardProps) {
  const { mutate, isSuccess, isLoading } = useFoodDataDelete();
  const handleDelete = () => {
    mutate(id)
  }

  return(
    <div className="card">
      <img src={image}/>
      <h2>{title}</h2>
      <p><b>Valor:</b>{price}</p>
      <a
      style={{
        backgroundColor: "#FF7F50",
        color: "white",
        fontWeight: "bold",
        textDecoration: "none",
        cursor: "pointer",
        padding: "8px 10px",
        borderRadius: "4px",
        marginBottom: "7px",
      }}
      onClick={handleDelete}
    >
      Excluir
    </a>
    </div>
    )
}
import Card from 'react-bootstrap/Card';

function CategoryCard({categoryName,fileName}) {
  return (
    <Card className="text-white" style={{width:'250px', height:'250px'}}>
      <Card.Img src={fileName} alt="Card image" />
      <Card.ImgOverlay style={{background:'rgba(0,0,0,0.5)',display:"flex",justifyContent:"center",alighItems:"Center"}}>
        <Card.Title style={{fontsize:'35px'}}>{categoryName}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CategoryCard;
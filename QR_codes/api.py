from fastapi import FastAPI,HTTPException
app=FastAPI()

NODE_MAPPING={
    "101":"Main Entrance",
    "202":"Emergency Room",
    "303":"Reception",
    "505":"Cafeteria"
}
@app.get("/map-node")
def map_node(from_node:str):
    if from_node in NODE_MAPPING:
        return {"node_id":from_node,"name":NODE_MAPPING[from_node]}
    else:
        raise HTTPException(status_code=404,detail="Node ID not found!!")
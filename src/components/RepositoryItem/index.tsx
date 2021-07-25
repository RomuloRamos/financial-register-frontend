import React from "react";
import { Repository } from "../../store/ducks/repositories/types";

interface ownProps{
    repository: Repository
}

export default function RepositoryItem({repository}:ownProps){
    return <li>{repository.name}</li>
}
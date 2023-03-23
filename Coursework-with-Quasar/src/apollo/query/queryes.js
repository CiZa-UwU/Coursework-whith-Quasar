import gql from "graphql-tag"

//Query
export const GetLevelData = gql`query GetLevelData($levels: Int!) {
    game_content(where: {levels: {_eq:$levels}}) {
      game_name
      id
      image
      is_answer
      levels
    }
  }`

export const GetUserData = gql`query GetUserData{
    done_levels{
      user_id
      level
      game
      done
    }
  }
  `
//Mutations
export const AddNewUser =  gql`
    mutation AddNewUser {
      insert_done_levels(objects: 
       {  
         level:1
         game:1
       }) 
       {
        affected_rows  
       }
      }`

export const AddDoneLevel =  gql`
    mutation AddDoneLevel($level: Int!, $game: Int!) {
      insert_done_levels(objects: 
       {  
         level:$level
         game:$game
         done:true
       }) 
       {
        affected_rows  
       }
      }`
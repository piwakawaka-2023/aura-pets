import connection from './connection'
const db = connection 

export function getAllMessages() {
  return db('chats')
  .join('users', 'chats.user_id', 'users.id')
  .select('chats.id','user_id as userId', 'message', 'created_at', 'users.pet_nickname as petNickName', )
}
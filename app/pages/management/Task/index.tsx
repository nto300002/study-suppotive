import TodoList from "../../../core/components/management/list"
import Edit from "../../../core/components/management/edit"

export default function Task() {
  return (
    <div>
      {/* componetを表示 */}
      <Edit />
      <TodoList />
    </div>
  )
}

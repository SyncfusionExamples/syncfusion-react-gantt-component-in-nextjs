'use client'
import { GanttComponent, Inject, Edit, Filter, Sort } from '@syncfusion/ej2-react-gantt';
import { projectResources, data } from './datasource';

export default function Home() {
  const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks',
    dependency: 'Predecessor',
    resourceInfo: 'resources'
  };
  const labelSettings: any = {
    rightLabel: 'resources'
  };
  const editSettings: any = {
    allowEditing: true,
    editMode: 'Auto',
    allowTaskbarEditing: true
  };
  const resourceFields: any = {
    id: 'resourceId',
    name: 'resourceName',
  };
  return (
    <>
      <h2>Syncfusion React Gantt Component</h2>
      <GanttComponent dataSource={data} allowFiltering={true} allowSorting={true} taskFields={taskFields} editSettings={editSettings} labelSettings={labelSettings}
        resourceFields={resourceFields} resources={projectResources} height='400px'>
        <Inject services={[Edit, Filter, Sort]} />
      </GanttComponent>
    </>
  )
}

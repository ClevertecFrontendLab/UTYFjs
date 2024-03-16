import { Button, Checkbox, Drawer, Input, InputNumber } from 'antd';
import type { Moment } from 'moment';
import { CloseOutlined, EditOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import './drawer-calendar.css';
import BadgeTraining from '@components/badge-training/badge-training';
import { ExerciseType } from '../../types/training-types';


type DrawerCalendarProps = {
  selectedTraining: string
  exercises: ExerciseType[]
  forRemoveIdxExercises: number[]
  setForRemoveIdxExercises: React.Dispatch<React.SetStateAction<number[]>>
  handleAddExercise: () => void
  isDrawerOpen: boolean;
  isEdit: boolean;
  onClose: () => void;
  calendarDate?: Moment | null;
  setNewExercises: React.Dispatch<React.SetStateAction<ExerciseType[]>>
};


const DrawerCalendar = ({ selectedTraining,
                          exercises,
                          forRemoveIdxExercises,
                          setForRemoveIdxExercises,
                          handleAddExercise,
                          isDrawerOpen,
                          isEdit,
                          onClose,
                          calendarDate = null,
                          setNewExercises }: DrawerCalendarProps) => {

  const date = calendarDate?.format('DD.MM.YYYY')

  const handleOnChangeName = (name: string, index: number) => {

    setNewExercises((state) => {

      const newState = [...state];
      console.log('handleOnChangeName', newState[index].name, name)
      newState[index].name = name;
      return newState;
    }
    )
  }
  const handleOnChangeRemoveCheckbox = ( index: number) => {

    if (forRemoveIdxExercises.includes(index)) {
      setForRemoveIdxExercises((state) => state.filter((item) => item !== index) )
    } else { 
      setForRemoveIdxExercises((state) => ([...state, index]))
    }
  }

  const handleOnChangeReplays = (replays: number, index: number) => {
    setNewExercises((state) => {
      const newState = [...state];
      newState[index].replays = replays;
      return newState;
    }
    )
  }
  const handleOnChangeWeight = (weight: number, index: number) => {
    setNewExercises((state) => {
      const newState = [...state];
      newState[index].weight = weight;
      return newState;
    }
    )
  }

  const handleOnChangeApproaches = (approaches: number, index: number) => {
    setNewExercises((state) => {
      const newState = [...state];
      newState[index].approaches = approaches;
      return newState;
    }
    )
  }
  const handleRemove = () => {
    setNewExercises(exercises.filter(( _, index) => !forRemoveIdxExercises.includes(index) ));
    setForRemoveIdxExercises([]);
    console.log(forRemoveIdxExercises);
  }


  return (
    <Drawer
      className='drawer-calendar'
      title={<>

        <div className='drawer-calendar__title-wrapper'> {isEdit ? <EditOutlined /> : <PlusOutlined />}<div className='drawer-calendar__title'> {isEdit ? 'Редактирование' : "Добавление упражнений"}</div> </div>
      </>}
      extra={<Button
        data-test-id=''
        type='text'
        size='small'
        icon={<CloseOutlined />}
        onClick={onClose}
      />}
      placement={'right'}
      closable={false}
      onClose={onClose}
      open={isDrawerOpen}
      mask={true}
      maskStyle={{ background: 'none' }}
      drawerStyle={{ borderRadius: '8px 0 0 8px' }}
      headerStyle={{ padding: '24px 32px 16px', borderBottom: 'none' }}
      bodyStyle={{ padding: '0 32px 24px', borderRadius: '8px 0 0 8px' }}
    >
      <>
        <div className='drawer-calendar__badge'>
          <BadgeTraining text={selectedTraining} isGray={true} /> <span className='drawer-calendar__date'>{date}</span>
        </div>
        <div className='drawer-calendar__exercise-list'>
          {exercises.map(({ approaches, weight, replays, name }, index) => (
            <fieldset
              className='exercise-item' key={index} >
              <Input name='name'
                className='exercise-item__input-title'
                placeholder="Упражнение"
                size='small'
                defaultValue={name}
                addonAfter={isEdit ? <Checkbox defaultChecked={forRemoveIdxExercises.includes(index)} onChange={() => { handleOnChangeRemoveCheckbox(index) }} /> : false}
                onChange={(e) => { handleOnChangeName(e.target.value, index) }} />
              <div className='exercise-item__values'>
                <div>
                  <div className='exercise-item__label'> Подходы </div>
                  <InputNumber
                    name='approaches'
                    className='exercise-item__input-approaches'
                    addonBefore='+' min={1}
                    placeholder="1"
                    size='small'
                    defaultValue={approaches}
                    onChange={(value) => { handleOnChangeApproaches(value || 1, index) }} />
                </div>
                <div className='exercise-item__values_second' >
                  <div>
                    <div className='exercise-item__label'> Вес, кг </div>
                    <InputNumber name='weight'
                      className='exercise-item__input-weight'
                      min={0}
                      placeholder="0"
                      size='small'
                      defaultValue={weight}
                      onChange={(value) => { handleOnChangeWeight(value || 0, index) }} />
                  </div>
                  <div className='input-divider'> x </div>
                  <div>
                    <div className='exercise-item__label'> Количество </div>
                    <InputNumber
                      name='replays'
                      className='exercise-item__input-count'
                      min={1}
                      placeholder="3"
                      size='small'
                      defaultValue={replays}
                      onChange={(value) => { handleOnChangeReplays(value || 1, index) }} />
                  </div>
                </div>

              </div>
            </fieldset>
          ))}
          <div className='drawer-calendar__btn-wrapper'>
            <Button className='drawer-calendar__btn-add'
              onClick={handleAddExercise}
              type='text'
              size='large'
              icon={<PlusOutlined />}
              style={{ width: '55%', display: 'flex', alignItems: 'center' }}>  Добавить еще </Button>
            {isEdit && <Button className='drawer-calendar__btn-remove'
              onClick={handleRemove}
              type='text'
              size='large'
              disabled={forRemoveIdxExercises.length === 0}
              icon={<MinusOutlined />}
              style={{ width: '45%', display: 'flex', alignItems: 'center' }}>  Удалить </Button>}

          </div>
        </div>
      </>

    </Drawer>
  );
};

export default DrawerCalendar;

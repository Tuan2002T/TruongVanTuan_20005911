
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { todoListSelector } from '../Redux/selectors';
import { addTodo, removeTodo, updateTodo } from '../Redux/actions';
export default function Screen_Todo({ navigation, route }) {

    const todoList = useSelector(todoListSelector);

    const dispatch = useDispatch();

    const [newJob, setNewJob] = useState('');

    const [data, setdata] = useState([]);

    const [idwork, setidwork] = useState();

    const [dataupdate, setdataupdate] = useState();
    useEffect(() => {
        fetch('https://654e4f55cbc325355742b93e.mockapi.io/ThucHanh/Screen1/'+ route.params.item.id)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: "LIST_TODO", payload: data.work });
                const ids = data.work.map(item => parseInt(item.id));
                const maxId = Math.max(...ids);
                setidwork((maxId + 1).toString());
            })
    }, []);
    const addTodoList = () => {
        dispatch(
            addTodo({
                id: idwork,
                job: newJob
            })
        )
        console.log(todoList);
        setNewJob('');

    }
    // const addJob = () => {
    //     const job = {
    //         id: idwork,
    //         job: newJob
    //     };
    //     // setData({...data, work: [...data.work, newJob]});
    //     fetch('https://654e4f55cbc325355742b93e.mockapi.io/ThucHanh/Screen1/1', {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             id: data.id,
    //             work: [...data.work, newJob]
    //         })
    //     })
    //     return newJob;
    // }

    const addJob = () => {
        // setData({...data, work: [...data.work, newJob]});
        fetch('https://654e4f55cbc325355742b93e.mockapi.io/ThucHanh/Screen1/'+route.params.item.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: data.id,
                work: todoList
            })
        })
        return newJob;
    }

    const deleteJob = (id) => {
        dispatch(
            removeTodo({
                id: id
            })
        )
    }
    const updateJob = () => {
        dispatch(
            updateTodo({
                data: {
                    id: dataupdate.id,
                    job: newJob
                }
            })
        )
        setNewJob('');
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: '800', marginTop: 50 }}>
                Todo List
            </Text>
            <View style={{
                flexDirection: 'row',
            }}>
                <TextInput
                    value={newJob} onChangeText={(text) => setNewJob(text)}
                    style={{ borderWidth: 1, width: 180, marginTop: 20, padding: 5, borderRadius: 10, height: 30, marginRight: 10 }} />
                <Pressable
                    onPress={() => addTodoList()}
                    style={{ backgroundColor: 'gray', padding: 10, borderRadius: 10, marginTop: 20, width: 70, height: 30, alignItems: 'center', justifyContent: "center", marginRight: 10 }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Add</Text>
                </Pressable>

                <Pressable
                    onPress={() => updateJob()}
                    style={{ backgroundColor: 'gray', padding: 10, borderRadius: 10, marginTop: 20, width: 70, height: 30, alignItems: 'center', justifyContent: "center" }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Update</Text>
                </Pressable>
            </View>

            <View style={{width:'100%', height:400}}>
                <FlatList
                    style={{ width: '100%', marginTop: 20 }}
                    data={todoList}
                    renderItem={({ item }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Pressable
                                onPress={() => { setNewJob(item.job), setdataupdate(item) }}
                                style={{
                                    flexDirection: 'row',
                                    width: '90%',
                                    justifyContent: 'space-between',
                                    marginTop: 10,
                                    alignItems: 'center',
                                    backgroundColor: 'gray',
                                    padding: 10,
                                    borderRadius: 10,
                                }}>
                                <Text style={{ color: 'white' }}>{item.job}</Text>
                                <Pressable
                                    onPress={() => { deleteJob(item.id), console.log(item.id); }}
                                >
                                    <Text style={{ color: 'white', marginRight: 10 }}>Delete</Text>
                                </Pressable>
                            </Pressable>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>

            <Pressable 
                onPress={() => addJob()}
                style={{
                backgroundColor: 'pink',
                height: 50,
                width: 200,
                marginTop:20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
            }}>
                <Text style={{ fontSize: 20, fontWeight: '800' }}>
                    Push API
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});

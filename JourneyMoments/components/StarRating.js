import React, {useState, useEffect} from 'react'
import StarRating from 'react-native-star-rating'
import {Content, Text, View} from 'native-base'
import {TouchableOpacity, StyleSheet} from 'react-native'
import Colors from "../values/Colors"

const Stars = ({ handleStars, rating, owner }) => {
    const [speed, setSpeed] = useState(0)
    const [cleanness, setCleanness] = useState(0)
    const [comfort, setComfort] = useState(0)
    const [disabled, setDisabled] = useState(owner)

    useEffect(()=> {
        setSpeed(rating.speed)
        setCleanness(rating.cleanness)
        setComfort(rating.comfort)
        if (!owner) setDisabled(true)
        if (owner) setDisabled(false)
    },[rating])

    return (
        <Content style={styles.kebab}>
            <View style={styles.row}>
                <Text style={styles.text}>Speed</Text>
                <StarRating
                    disabled={disabled}
                    maxStars={5}
                    rating={speed}
                    selectedStar={(rating) => setSpeed(rating)}
                    fullStarColor={styles.color.color}
                    starSize={20}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Comfort</Text>
                <StarRating
                    disabled={disabled}
                    maxStars={5}
                    rating={comfort}
                    selectedStar={(rating) => setComfort(rating)}
                    fullStarColor={styles.color.color}
                    starSize={20}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Cleanness</Text>
                <StarRating
                    disabled={disabled}
                    maxStars={5}
                    rating={cleanness}
                    selectedStar={(rating) => setCleanness(rating)}
                    fullStarColor={styles.color.color}
                    starSize={20}
                />
            </View>
            {owner && <>
                <TouchableOpacity style={styles.btn}
                    onPress={() => handleStars({ speed: speed, cleanness: cleanness, comfort: comfort})}>
                    <Text style={styles.btnText}>RATE</Text>
                </TouchableOpacity>
            </>}
        </Content>
    )
}

const styles = StyleSheet.create({
    kebab:{
        marginLeft: 10,
        marginBottom: 10,
    },
    row: {
        flex: 1,
        flexDirection: 'column',
    },
    text: {
        textAlign: 'center'
    },
    btn: {
        width: '100%',
        backgroundColor: Colors.primaryColor,
        borderRadius: 25,
        height: 40,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 14
    },
    color: {
       color: "#fff200"
    }
})

export default Stars

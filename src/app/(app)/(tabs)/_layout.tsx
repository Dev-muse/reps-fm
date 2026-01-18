import { Tabs } from "expo-router";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Image from 'react-native'



const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="home" color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="exercises"
        options={{
          headerShown: false,
          title: "Exercises",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="book" color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          headerShown: false,
          title: "Workout",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="plus-circle" color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="active-workout"
        options={{
          title: "Active Workout",
          href: null,
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          headerShown: false,
          title: "History",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="clock-circle" color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
           tabBarIcon: ({ color, size }) => {
            return <AntDesign name="user" color={color} size={size} />;
          },
          // tabBarIcon: ({ color, size }) => {
          //   return (
          //     <Image
          //       source={user?.imageUrl ?? user?.externalAccounts[0]?.imageUrl}
          //       className="rounded-fill"
          //       style={{ width: 28, height: 28, borderRadius: 100 }}
          //     />
          //   );
          // },
        }}
      />
    </Tabs>
  );
};

export default Layout;

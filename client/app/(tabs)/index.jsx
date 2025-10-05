//  import { Image } from 'expo-image';
// import { StyleSheet, View, TouchableOpacity, ScrollView, Dimensions, TextInput } from 'react-native';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { Link } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useState } from 'react';
// import { BlurView } from 'expo-blur';

// const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// export default function AuthScreen() {
//   const [user, setUser] = useState(null);
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleGoogleLogin = () => {
//     // Implement Google OAuth here
//     console.log('Google login pressed');
//   };

//   const handleLogin = () => {
//     // Implement login logic
//     console.log('Login pressed');
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Background with Gradient and Pattern */}
//       <LinearGradient
//         colors={['#667eea', '#764ba2', '#4A00E0']}
//         style={styles.background}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//       >
//         {/* Animated Background Elements */}
//         <View style={styles.floatingCircle1} />
//         <View style={styles.floatingCircle2} />
//         <View style={styles.floatingCircle3} />
        
//         <ScrollView 
//           contentContainerStyle={styles.scrollContainer}
//           showsVerticalScrollIndicator={false}
//           keyboardShouldPersistTaps="handled"
//         >
//           {/* Header Section - Made more compact */}
//           <View style={styles.header}>
//             <Image
//               source={require('@/assets/images/icon.png')}
//               style={styles.logo}
//               contentFit="contain"
//             />
//             <ThemedText style={styles.appTitle}>ASHA Care</ThemedText>
//             <ThemedText style={styles.appSubtitle}>
//               National Health Mission
//             </ThemedText>
//           </View>

//           {/* Auth Card - Made more compact */}
//           <BlurView intensity={25} tint="light" style={styles.authCard}>
//             {/* Toggle Switch */}
//             <View style={styles.toggleContainer}>
//               <TouchableOpacity 
//                 style={[styles.toggleButton, isLogin && styles.toggleActive]}
//                 onPress={() => setIsLogin(true)}
//               >
//                 <ThemedText style={[styles.toggleText, isLogin && styles.toggleTextActive]}>
//                   Login
//                 </ThemedText>
//               </TouchableOpacity>
//               <TouchableOpacity 
//                 style={[styles.toggleButton, !isLogin && styles.toggleActive]}
//                 onPress={() => setIsLogin(false)}
//               >
//                 <ThemedText style={[styles.toggleText, !isLogin && styles.toggleTextActive]}>
//                   Register
//                 </ThemedText>
//               </TouchableOpacity>
//             </View>

//             {/* Form - Reduced gaps */}
//             <View style={styles.formContainer}>
//               <ThemedText style={styles.welcomeText}>
//                 {isLogin ? 'Welcome Back!' : 'Join ASHA Network'}
//               </ThemedText>
//               <ThemedText style={styles.instructionText}>
//                 {isLogin 
//                   ? 'Sign in to continue your important work' 
//                   : 'Create your account to get started'
//                 }
//               </ThemedText>

//               {/* Input Fields */}
//               <View style={styles.inputContainer}>
//                 <View style={styles.inputWrapper}>
//                   <Image
//                     source={require('@/assets/images/gmail.png')}
//                     style={styles.inputIcon}
//                   />
//                   <TextInput
//                     style={styles.textInput}
//                     placeholder="Email Address"
//                     placeholderTextColor="#94A3B8"
//                     value={email}
//                     onChangeText={setEmail}
//                     keyboardType="email-address"
//                     autoCapitalize="none"
//                   />
//                 </View>

//                 <View style={styles.inputWrapper}>
//                   <Image
//                     source={require('@/assets/images/padlock.png')}
//                     style={styles.inputIcon}
//                   />
//                   <TextInput
//                     style={styles.textInput}
//                     placeholder="Password"
//                     placeholderTextColor="#94A3B8"
//                     value={password}
//                     onChangeText={setPassword}
//                     secureTextEntry
//                   />
//                 </View>

//                 {isLogin && (
//                   <TouchableOpacity style={styles.forgotPassword}>
//                     <ThemedText style={styles.forgotPasswordText}>
//                       Forgot Password?
//                     </ThemedText>
//                   </TouchableOpacity>
//                 )}
//               </View>

//               {/* Login Button */}
//               <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//                 <LinearGradient
//                   colors={['#667eea', '#764ba2']}
//                   style={styles.loginButtonGradient}
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 1, y: 0 }}
//                 >
//                   <ThemedText style={styles.loginButtonText}>
//                     {isLogin ? 'Sign In' : 'Create Account'}
//                   </ThemedText>
//                 </LinearGradient>
//               </TouchableOpacity>

//               {/* Divider */}
//               <View style={styles.dividerContainer}>
//                 <View style={styles.divider} />
//                 <ThemedText style={styles.dividerText}>OR</ThemedText>
//                 <View style={styles.divider} />
//               </View>

//               {/* Google Login */}
//               <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
//                 <Image
//                   source={require('@/assets/images/Google.png')}
//                   style={styles.googleIcon}
//                 />
//                 <ThemedText style={styles.googleButtonText}>
//                   Continue with Google
//                 </ThemedText>
//               </TouchableOpacity>

//               {/* Additional Options - Made more compact */}
//               <View style={styles.additionalOptions}>
//                 <TouchableOpacity style={styles.optionButton}>
//                   <Image
//                     source={require('@/assets/images/phone-call.png')}
//                     style={styles.optionIcon}
//                   />
//                   <ThemedText style={styles.optionText}>Use Phone Number</ThemedText>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.optionButton}>
//                   <Image
//                     source={require('@/assets/images/offline.png')}
//                     style={styles.optionIcon}
//                   />
//                   <ThemedText style={styles.optionText}>Offline Mode</ThemedText>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </BlurView>

//           {/* Footer - Made more compact */}
//           <View style={styles.footer}>
//             <ThemedText style={styles.footerText}>
//               By continuing, you agree to our{' '}
//               <ThemedText style={styles.footerLink}>Terms of Service</ThemedText>
//               {' '}and{' '}
//               <ThemedText style={styles.footerLink}>Privacy Policy</ThemedText>
//             </ThemedText>
            
//             <View style={styles.governmentBadge}>
//               <Image
//                 source={require('@/assets/images/icon.png')}
//                 style={styles.govtLogo}
//               />
//               <ThemedText style={styles.govtText}>
//                 Official Partner - Ministry of Health & Family Welfare
//               </ThemedText>
//             </View>
//           </View>
//         </ScrollView>
//       </LinearGradient>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   background: {
//     flex: 1,
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     paddingHorizontal: 20,
//     paddingVertical: SCREEN_HEIGHT < 700 ? 10 : 20, // Adaptive padding based on screen height
//     justifyContent: 'center',
//     minHeight: SCREEN_HEIGHT,
//   },
//   floatingCircle1: {
//     position: 'absolute',
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     top: '5%',
//     left: -30,
//   },
//   floatingCircle2: {
//     position: 'absolute',
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     backgroundColor: 'rgba(255,255,255,0.05)',
//     top: '65%',
//     right: -20,
//   },
//   floatingCircle3: {
//     position: 'absolute',
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: 'rgba(255,255,255,0.08)',
//     bottom: '15%',
//     left: '35%',
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: SCREEN_HEIGHT < 700 ? 15 : 25,
//     marginTop: SCREEN_HEIGHT < 700 ? 5 : 10,
//   },
//   logo: {
//     width: 70,
//     height: 70,
//     marginBottom: 12,
//   },
//   appTitle: {
//     fontSize: SCREEN_HEIGHT < 700 ? 26 : 28,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 6,
//     textAlign: 'center',
//   },
//   appSubtitle: {
//     fontSize: SCREEN_HEIGHT < 700 ? 14 : 15,
//     color: 'rgba(255,255,255,0.8)',
//     textAlign: 'center',
//   },
//   authCard: {
//     backgroundColor: 'rgba(255, 255, 255, 0.95)',
//     borderRadius: 20,
//     padding: SCREEN_HEIGHT < 700 ? 18 : 22,
//     marginBottom: 20,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 20,
//     elevation: 8,
//   },
//   toggleContainer: {
//     flexDirection: 'row',
//     backgroundColor: 'rgba(255,255,255,0.5)',
//     borderRadius: 14,
//     padding: 3,
//     marginBottom: 20,
//   },
//   toggleButton: {
//     flex: 1,
//     paddingVertical: 10,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   toggleActive: {
//     backgroundColor: '#667eea',
//     shadowColor: '#667eea',
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 6,
//     elevation: 4,
//   },
//   toggleText: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#64748B',
//   },
//   toggleTextActive: {
//     color: '#FFFFFF',
//   },
//   formContainer: {
//     gap: SCREEN_HEIGHT < 700 ? 12 : 16,
//   },
//   welcomeText: {
//     fontSize: SCREEN_HEIGHT < 700 ? 20 : 22,
//     fontWeight: '700',
//     color: '#1E293B',
//     textAlign: 'center',
//   },
//   instructionText: {
//     fontSize: SCREEN_HEIGHT < 700 ? 13 : 14,
//     color: '#64748B',
//     textAlign: 'center',
//     lineHeight: 18,
//     marginBottom: 5,
//   },
//   inputContainer: {
//     gap: 12,
//   },
//   inputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255,255,255,0.9)',
//     borderRadius: 14,
//     paddingHorizontal: 14,
//     paddingVertical: 12,
//     borderWidth: 1,
//     borderColor: 'rgba(0,0,0,0.08)',
//   },
//   inputIcon: {
//     width: 18,
//     height: 18,
//     marginRight: 10,
//     tintColor: '#64748B',
//   },
//   textInput: {
//     flex: 1,
//     fontSize: 15,
//     color: '#1E293B',
//     padding: 0,
//     margin: 0,
//   },
//   forgotPassword: {
//     alignSelf: 'flex-end',
//     marginTop: 5,
//   },
//   forgotPasswordText: {
//     color: '#667eea',
//     fontSize: 13,
//     fontWeight: '500',
//   },
//   loginButton: {
//     borderRadius: 14,
//     overflow: 'hidden',
//     marginTop: 8,
//     shadowColor: '#667eea',
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 12,
//     elevation: 6,
//   },
//   loginButtonGradient: {
//     paddingVertical: 14,
//     alignItems: 'center',
//     borderRadius: 14,
//   },
//   loginButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   dividerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 15,
//   },
//   divider: {
//     flex: 1,
//     height: 1,
//     backgroundColor: 'rgba(0,0,0,0.1)',
//   },
//   dividerText: {
//     color: '#64748B',
//     fontSize: 13,
//     fontWeight: '500',
//     marginHorizontal: 12,
//   },
//   googleButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 14,
//     borderRadius: 14,
//     borderWidth: 1,
//     borderColor: 'rgba(0,0,0,0.1)',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   googleIcon: {
//     width: 18,
//     height: 18,
//     marginRight: 10,
//   },
//   googleButtonText: {
//     color: '#1E293B',
//     fontSize: 15,
//     fontWeight: '500',
//   },
//   additionalOptions: {
//     gap: 10,
//     marginTop: 12,
//   },
//   optionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 10,
//     borderRadius: 10,
//     backgroundColor: 'rgba(255,255,255,0.5)',
//   },
//   optionIcon: {
//     width: 16,
//     height: 16,
//     marginRight: 8,
//     tintColor: '#64748B',
//   },
//   optionText: {
//     color: '#64748B',
//     fontSize: 13,
//     fontWeight: '500',
//   },
//   footer: {
//     alignItems: 'center',
//     gap: 15,
//     marginTop: 10,
//   },
//   footerText: {
//     color: 'rgba(255,255,255,0.7)',
//     fontSize: 11,
//     textAlign: 'center',
//     lineHeight: 14,
//   },
//   footerLink: {
//     color: 'rgba(255,255,255,0.9)',
//     fontWeight: '500',
//   },
//   governmentBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 10,
//     gap: 8,
//   },
//   govtLogo: {
//     width: 20,
//     height: 20,
//   },
//   govtText: {
//     color: 'rgba(255,255,255,0.9)',
//     fontSize: 10,
//     fontWeight: '500',
//     flexShrink: 1,
//   },
// });  


import React, { useState ,useEffect} from "react";
import { Image, StyleSheet, View, TouchableOpacity, ScrollView, Dimensions, TextInput, Alert } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import axios from "axios";
import Realm from "realm";
import { RealmContext } from "../../Database/RealmContext.js";

import NetInfo from "@react-native-community/netinfo"; // to check online/offline

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const { useRealm } = RealmContext;

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const realm = useRealm();

  // 🧩 Login/Register Handler
  const handleLogin = async () => {
    if (!email || !password || (!isLogin && !name)) {
      Alert.alert("Please fill all fields");
      return;
    }

    const netState = await NetInfo.fetch();

    if (!netState.isConnected) {
      // Offline mode → store in Realm
      realm.write(() => {
        realm.create("AshaWorker", {
          _id: new Realm.BSON.ObjectId(),
          name,
          email,
          password,
          synced: false,
        });
      });
      Alert.alert("Offline", "Data saved locally. Will sync when online.");
      return;
    }

    try {
      if (isLogin) {
        const res = await axios.post("http://localhost:5000/api/asha/login", { email, password });
        Alert.alert("Success", res.data.message);
      } else {
        const res = await axios.post("http://localhost:5000/api/asha/register", { name, email, password });
        Alert.alert("Success", "Registered successfully!");
      }
    } catch (err) {
      Alert.alert("Error", err.response?.data?.error || "Something went wrong");
    }
  };

    

useEffect(() => {
  const unsubscribe = NetInfo.addEventListener(async (state) => {
    if (state.isConnected) {
      const unsynced = realm.objects("AshaWorker").filtered("synced == false");

      for (const worker of unsynced) {
        try {
          await axios.post("http://localhost:5000/api/asha/register", {
            name: worker.name,
            email: worker.email,
            password: worker.password,
          });
          realm.write(() => {
            worker.synced = true;
          });
        } catch (err) {
          console.log("Sync failed for:", worker.email);
        }
      }
    }
  });

  return () => unsubscribe();
}, []);



  return (
    <SafeAreaView style={styles.safeArea}>
       <LinearGradient
        colors={['#667eea', '#764ba2', '#4A00E0']}
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Animated Background Elements */}
        <View style={styles.floatingCircle1} />
        <View style={styles.floatingCircle2} />
        <View style={styles.floatingCircle3} />
        
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header Section - Made more compact */}
          <View style={styles.header}>
            <Image
              source={require('@/assets/images/icon.png')}
              style={styles.logo}
              contentFit="contain"
            />
            <ThemedText style={styles.appTitle}>ASHA Care</ThemedText>
            <ThemedText style={styles.appSubtitle}>
              National Health Mission
            </ThemedText>
          </View>

          {/* Auth Card - Made more compact */}
          <BlurView intensity={25} tint="light" style={styles.authCard}>
            {/* Toggle Switch */}
            <View style={styles.toggleContainer}>
              <TouchableOpacity 
                style={[styles.toggleButton, isLogin && styles.toggleActive]}
                onPress={() => setIsLogin(true)}
              >
                <ThemedText style={[styles.toggleText, isLogin && styles.toggleTextActive]}>
                  Login
                </ThemedText>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.toggleButton, !isLogin && styles.toggleActive]}
                onPress={() => setIsLogin(false)}
              >
                <ThemedText style={[styles.toggleText, !isLogin && styles.toggleTextActive]}>
                  Register
                </ThemedText>
              </TouchableOpacity>
            </View>

            {/* Form - Reduced gaps */}
            <View style={styles.formContainer}>
              <ThemedText style={styles.welcomeText}>
                {isLogin ? 'Welcome Back!' : 'Join ASHA Network'}
              </ThemedText>
              <ThemedText style={styles.instructionText}>
                {isLogin 
                  ? 'Sign in to continue your important work' 
                  : 'Create your account to get started'
                }
              </ThemedText>

              {/* Input Fields */}
              <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                  <Image
                    source={require('@/assets/images/gmail.png')}
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholder="Email Address"
                    placeholderTextColor="#94A3B8"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Image
                    source={require('@/assets/images/padlock.png')}
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    placeholderTextColor="#94A3B8"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                  />
                </View>

                {isLogin && (
                  <TouchableOpacity style={styles.forgotPassword}>
                    <ThemedText style={styles.forgotPasswordText}>
                      Forgot Password?
                    </ThemedText>
                  </TouchableOpacity>
                )}
              </View>

              {/* Login Button */}
              <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <LinearGradient
                  colors={['#667eea', '#764ba2']}
                  style={styles.loginButtonGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <ThemedText style={styles.loginButtonText}>
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </ThemedText>
                </LinearGradient>
              </TouchableOpacity>

              {/* Divider */}
              <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <ThemedText style={styles.dividerText}>OR</ThemedText>
                <View style={styles.divider} />
              </View>

              {/* Google Login */}
              <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
                <Image
                  source={require('@/assets/images/Google.png')}
                  style={styles.googleIcon}
                />
                <ThemedText style={styles.googleButtonText}>
                  Continue with Google
                </ThemedText>
              </TouchableOpacity>

              {/* Additional Options - Made more compact */}
              <View style={styles.additionalOptions}>
                <TouchableOpacity style={styles.optionButton}>
                  <Image
                    source={require('@/assets/images/phone-call.png')}
                    style={styles.optionIcon}
                  />
                  <ThemedText style={styles.optionText}>Use Phone Number</ThemedText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton}>
                  <Image
                    source={require('@/assets/images/offline.png')}
                    style={styles.optionIcon}
                  />
                  <ThemedText style={styles.optionText}>Offline Mode</ThemedText>
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>

          {/* Footer - Made more compact */}
          <View style={styles.footer}>
            <ThemedText style={styles.footerText}>
              By continuing, you agree to our{' '}
              <ThemedText style={styles.footerLink}>Terms of Service</ThemedText>
              {' '}and{' '}
              <ThemedText style={styles.footerLink}>Privacy Policy</ThemedText>
            </ThemedText>
            
            <View style={styles.governmentBadge}>
              <Image
                source={require('@/assets/images/icon.png')}
                style={styles.govtLogo}
              />
              <ThemedText style={styles.govtText}>
                Official Partner - Ministry of Health & Family Welfare
              </ThemedText>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

// Your existing styles stay the same 👇
 const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: SCREEN_HEIGHT < 700 ? 10 : 20, // Adaptive padding based on screen height
    justifyContent: 'center',
    minHeight: SCREEN_HEIGHT,
  },
  floatingCircle1: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(255,255,255,0.1)',
    top: '5%',
    left: -30,
  },
  floatingCircle2: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.05)',
    top: '65%',
    right: -20,
  },
  floatingCircle3: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.08)',
    bottom: '15%',
    left: '35%',
  },
  header: {
    alignItems: 'center',
    marginBottom: SCREEN_HEIGHT < 700 ? 15 : 25,
    marginTop: SCREEN_HEIGHT < 700 ? 5 : 10,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 12,
  },
  appTitle: {
    fontSize: SCREEN_HEIGHT < 700 ? 26 : 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
    textAlign: 'center',
  },
  appSubtitle: {
    fontSize: SCREEN_HEIGHT < 700 ? 14 : 15,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
  },
  authCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: SCREEN_HEIGHT < 700 ? 18 : 22,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 14,
    padding: 3,
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  toggleActive: {
    backgroundColor: '#667eea',
    shadowColor: '#667eea',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  toggleText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#64748B',
  },
  toggleTextActive: {
    color: '#FFFFFF',
  },
  formContainer: {
    gap: SCREEN_HEIGHT < 700 ? 12 : 16,
  },
  welcomeText: {
    fontSize: SCREEN_HEIGHT < 700 ? 20 : 22,
    fontWeight: '700',
    color: '#1E293B',
    textAlign: 'center',
  },
  instructionText: {
    fontSize: SCREEN_HEIGHT < 700 ? 13 : 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 5,
  },
  inputContainer: {
    gap: 12,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
  },
  inputIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
    tintColor: '#64748B',
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    color: '#1E293B',
    padding: 0,
    margin: 0,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  forgotPasswordText: {
    color: '#667eea',
    fontSize: 13,
    fontWeight: '500',
  },
  loginButton: {
    borderRadius: 14,
    overflow: 'hidden',
    marginTop: 8,
    shadowColor: '#667eea',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
  loginButtonGradient: {
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 14,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  dividerText: {
    color: '#64748B',
    fontSize: 13,
    fontWeight: '500',
    marginHorizontal: 12,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  googleIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#1E293B',
    fontSize: 15,
    fontWeight: '500',
  },
  additionalOptions: {
    gap: 10,
    marginTop: 12,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  optionIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
    tintColor: '#64748B',
  },
  optionText: {
    color: '#64748B',
    fontSize: 13,
    fontWeight: '500',
  },
  footer: {
    alignItems: 'center',
    gap: 15,
    marginTop: 10,
  },
  footerText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 14,
  },
  footerLink: {
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '500',
  },
  governmentBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    gap: 8,
  },
  govtLogo: {
    width: 20,
    height: 20,
  },
  govtText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 10,
    fontWeight: '500',
    flexShrink: 1,
  },
});  
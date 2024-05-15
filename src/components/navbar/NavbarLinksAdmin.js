import {
	Avatar,
	Flex,
	Icon,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useColorModeValue
} from '@chakra-ui/react';
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from 'firebase/auth';
import { app } from 'firebase.js';

import { collection, query, where, getDocs,getFirestore } from "firebase/firestore";

import { useHistory } from 'react-router-dom'; 
import { ItemContent } from 'components/menu/ItemContent';
import { SearchBar } from 'components/navbar/searchBar/SearchBar';
import { SidebarResponsive } from 'components/sidebar/Sidebar';
import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import { MdNotificationsNone, MdInfoOutline } from 'react-icons/md';
import { RiCoinLine } from 'react-icons/ri';
import routes from 'routes.js';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
export default function HeaderLinks(props) {
	const { secondary } = props;
	const navbarIcon = useColorModeValue('gray.400', 'white');
	let menuBg = useColorModeValue('white', 'navy.800');
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorBrand = useColorModeValue('brand.700', 'brand.400');
	const ethColor = useColorModeValue('gray.700', 'white');
	const borderColor = useColorModeValue('#E6ECFA', 'rgba(135, 140, 189, 0.3)');
	const ethBg = useColorModeValue('secondaryGray.300', 'navy.900');
	const ethBox = useColorModeValue('white', 'navy.800');
	const shadow = useColorModeValue(
		'14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
		'14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
	);

	
	const auth = getAuth(app);
	const [user] = useAuthState(auth);
	const history = useHistory(); // Use useHistory hook to navigate to another route
	const firestore = getFirestore(app); 
	const q = query(collection(firestore, "users"), where("email", "==", user.email));

	const [Coins, setCoins] = useState(3);

	const getdata = async () => {
		const querySnapshot = await getDocs(q);
		console.log(querySnapshot);
		querySnapshot.forEach((doc) => {
			const c = (doc.data().coins);
			setCoins(c);
		  });
	}
	
	getdata();
	

	const logout = async () => {
		try {
		  await auth.signOut(); // Call signOut method from Firebase Authentication
		  // Redirect to login page or any other route after successful logout
		  history.push('/auth/sign-in'); // Redirect to the login page
		} catch (error) {
		  console.error('Error signing out:', error);
		}
	  };

	return (
		<Flex
			w={{ sm: '100%', md: 'auto' }}
			alignItems="center"
			flexDirection="row"
			bg={menuBg}
			flexWrap={secondary ? { base: 'wrap', md: 'nowrap' } : 'unset'}
			p="10px"
			borderRadius="30px"
			boxShadow={shadow}>
			<SearchBar mb={secondary ? { base: '10px', md: 'unset' } : 'unset'} me="10px" borderRadius="30px" />
			<NavLink to="/admin/store">
			<Flex
				bg={ethBg}
				display={secondary ? 'flex' : 'flex'}
				borderRadius="30px"
				ms="auto"
				p="6px"
				align="center"
				me="6px">
				<Flex align="center" justify="center" bg={ethBox} h="29px" w="29px" borderRadius="30px" me="7px">
					<Icon color={ethColor} w="9px" h="14px" as={RiCoinLine} />
				</Flex>
				<Text w="max-content" color={ethColor} fontSize="sm" fontWeight="700" me="6px">
					{Coins}
					<Text as="span" display={{ base: 'none', md: 'unset' }}>
						{' '}
						Coins
					</Text>
				</Text>
			</Flex>
			</NavLink>
			<SidebarResponsive routes={routes} />
			<Menu>
				<MenuButton p="0px">
					<Icon mt="6px" as={MdNotificationsNone} color={navbarIcon} w="18px" h="18px" me="10px" />
				</MenuButton>
				<MenuList
					boxShadow={shadow}
					p="20px"
					borderRadius="20px"
					bg={menuBg}
					border="none"
					mt="22px"
					me={{ base: '30px', md: 'unset' }}
					minW={{ base: 'unset', md: '400px', xl: '450px' }}
					maxW={{ base: '360px', md: 'unset' }}>
					<Flex jusitfy="space-between" w="100%" mb="20px">
						<Text fontSize="md" fontWeight="600" color={textColor}>
							Notifications
						</Text>
						<Text fontSize="sm" fontWeight="500" color={textColorBrand} ms="auto" cursor="pointer">
							Mark all read
						</Text>
					</Flex>
					<Flex flexDirection="column">
						<MenuItem _hover={{ bg: 'none' }} _focus={{ bg: 'none' }} px="0" borderRadius="8px" mb="10px">
							<ItemContent info="Aishwary Bhaiya" aName="Alicia" />
						</MenuItem>
						<MenuItem _hover={{ bg: 'none' }} _focus={{ bg: 'none' }} px="0" borderRadius="8px" mb="10px">
							<ItemContent info="Niza didi" aName="Josh Henry" />
						</MenuItem>
					</Flex>
				</MenuList>
			</Menu>

      <Menu>
      </Menu>

			<Menu>
				<MenuButton p="0px">
					<Avatar
						_hover={{ cursor: 'pointer' }}
						color="white"
						name={user ? user.displayName : "Guest"}
						bg="#11047A"
						size="sm"
						w="40px"
						h="40px"
					/>
				</MenuButton>
				<MenuList boxShadow={shadow} p="0px" mt="10px" borderRadius="20px" bg={menuBg} border="none">
					<Flex w="100%" mb="0px">
						<Text
							ps="20px"
							pt="16px"
							pb="10px"
							w="100%"
							borderBottom="1px solid"
							borderColor={borderColor}
							fontSize="sm"
							fontWeight="700"
							color={textColor}>
							👋&nbsp; Hey, {user ? user.displayName : "Guest"}
						</Text>
					</Flex>
					<Flex flexDirection="column" p="10px">
						<MenuItem
							_hover={{ bg: 'none' }}
							_focus={{ bg: 'none' }}
							color="red.400"
							borderRadius="8px"
							px="14px"
							onClick={logout}
							>
							<Text fontSize="sm">Log out</Text>
						</MenuItem>
					</Flex>
				</MenuList>
			</Menu>
		</Flex>
	);
}

HeaderLinks.propTypes = {
	variant: PropTypes.string,
	fixed: PropTypes.bool,
	secondary: PropTypes.bool,
	onOpen: PropTypes.func
};

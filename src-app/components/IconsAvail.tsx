import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAd,
  faAt,
  faOm,
  faTh,
  faTv,
  faBan,
  faBed,
  faBox,
  faBug,
  faBus,
  faCar,
  faCat,
  faCog,
  faCut,
  faDna,
  faDog,
  faEgg,
  faEye,
  faFan,
  faFax,
  faGem,
  faHdd,
  faKey,
  faMap,
  faMeh,
  faPaw,
  faPen,
  faPoo,
  faRss,
  faSms,
  faSpa,
  faSun,
  faTag,
  faTty,
  faAnkh,
  faAtom,
  faBaby,
  faBars,
  faBath,
  faBeer,
  faBell,
  faBlog,
  faBold,
  faBolt,
  faBomb,
  faBone,
  faBong,
  faBook,
  faBurn,
  faCity,
  faCode,
  faCogs,
  faCopy,
  faCrop,
  faCrow,
  faCube,
  faDeaf,
  faDice,
  faDove,
  faDrum,
  faEdit,
  faFile,
  faFill,
  faFilm,
  faFire,
  faFish,
  faFlag,
  faFont,
  faFrog,
  faGift,
  faGrin,
  faHome,
  faInfo,
  faJedi,
  faKiss,
  faLeaf,
  faLink,
  faList,
  faLock,
  faMale,
  faMars,
  faMask,
  faMoon,
  faPlay,
  faPlug,
  faPlus,
  faPoll,
  faPoop,
  faPray,
  faRedo,
  faRing,
  faRoad,
  faSave,
  faShip,
  faSign,
  faSink,
  faSmog,
  faSoap,
  faSort,
  faStar,
  faStop,
  faSync,
  faTags,
  faTape,
  faTaxi,
  faTint,
  faTram,
  faTree,
  faUndo,
  faUser,
  faVest,
  faVial,
  faWifi,
  faWind,
  faXRay,
  faAngry,
  faAtlas,
  faAward,
  faBacon,
  faBahai,
  faBible,
  faBlind,
  faBoxes,
  faBrain,
  faBroom,
  faBrush,
  faChair,
  faCheck,
  faChess,
  faChild,
  faClock,
  faClone,
  faCloud,
  faCoins,
  faCouch,
  faCross,
  faCrown,
  faCubes,
  faDizzy,
  faDolly,
  faEject,
  faFlask,
  faFrown,
  faGavel,
  faGhost,
  faGifts,
  faGlobe,
  faHamsa,
  faHands,
  faHeart,
  faHippo,
  faHorse,
  faHotel,
  faIcons,
  faIgloo,
  faImage,
  faInbox,
  faJoint,
  faKaaba,
  faLaugh,
  faLemon,
  faLungs,
  faMagic,
  faMedal,
  faMinus,
  faMouse,
  faMusic,
  faOtter,
  faPager,
  faPaste,
  faPause,
  faPeace,
  faPhone,
  faPills,
  faPlane,
  faPollH,
  faPrint,
  faQuran,
  faReply,
  faRobot,
  faRoute,
  faRuler,
  faShare,
  faSkull,
  faSlash,
  faSmile,
  faSocks,
  faStamp,
  faStore,
  faTable,
  faTasks,
  faTeeth,
  faTenge,
  faTimes,
  faTired,
  faTools,
  faTooth,
  faTorah,
  faTrain,
  faTrash,
  faTruck,
  faUsers,
  faVenus,
  faVials,
  faVideo,
  faVirus,
  faWater,
  faAdjust,
  faAnchor,
  faBiking,
  faBusAlt,
  faCamera,
  faCarAlt,
  faCarrot,
  faCheese,
  faChurch,
  faCircle,
  faCoffee,
  faCookie,
  faCrutch,
  faDiceD6,
  faDivide,
  faDonate,
  faDragon,
  faEquals,
  faEraser,
  faExpand,
  faFaucet,
  faFemale,
  faFilter,
  faFolder,
  faFutbol,
  faGuitar,
  faHammer,
  faHiking,
  faHotTub,
  faHotdog,
  faIdCard,
  faImages,
  faIndent,
  faItalic,
  faKhanda,
  faLaptop,
  faListOl,
  faListUl,
  faMagnet,
  faMapPin,
  faMarker,
  faMedkit,
  faMemory,
  faMeteor,
  faMitten,
  faMobile,
  faMosque,
  faMugHot,
  faNeuter,
  faOilCan,
  faPallet,
  faPenAlt,
  faPenNib,
  faQrcode,
  faRandom,
  faRibbon,
  faRocket,
  faSadCry,
  faSchool,
  faScroll,
  faSdCard,
  faSearch,
  faServer,
  faShapes,
  faShower,
  faSignal,
  faSkiing,
  faSleigh,
  faSortUp,
  faSpider,
  faSquare,
  faStream,
  faSubway,
  faTablet,
  faThList,
  faToilet,
  faTrophy,
  faTshirt,
  faUnlink,
  faUnlock,
  faUpload,
  faUserMd,
  faVihara,
  faWallet,
  faWeight,
  faWrench,
  faAngleUp,
  faArchive,
  faArchway,
  faArrowUp,
  faBandAid,
  faBarcode,
  faBicycle,
  faBlender,
  faBoxOpen,
  faBraille,
  faCarSide,
  faCaravan,
  faCaretUp,
  faColumns,
  faComment,
  faCompass,
  faCropAlt,
  faDesktop,
  faDiceD20,
  faDiceOne,
  faDiceSix,
  faDiceTwo,
  faDisease,
  faDungeon,
  faFeather,
  faFileAlt,
  faFileCsv,
  faFilePdf,
  faFireAlt,
  faFlagUsa,
  faFlushed,
  faForward,
  faGamepad,
  faGasPump,
  faGlasses,
  faGopuram,
  faGrimace,
  faGrinAlt,
  faHSquare,
  faHardHat,
  faHashtag,
  faHeading,
  faHeadset,
  faHistory,
  faHryvnia,
  faICursor,
  faIcicles,
  faIdBadge,
  faListAlt,
  faMenorah,
  faMercury,
  faOutdent,
  faPalette,
  faParking,
  faPercent,
  faPodcast,
  faRainbow,
  faReceipt,
  faRecycle,
  faRedoAlt,
  faRetweet,
  faRunning,
  faSadTear,
  faSimCard,
  faSitemap,
  faSkating,
  faSmoking,
  faSnowman,
  faSpinner,
  faSplotch,
  faSwimmer,
  faSyncAlt,
  faSyringe,
  faTablets,
  faThLarge,
  faToolbox,
  faTractor,
  faTrailer,
  faUndoAlt,
  faUserAlt,
  faUserCog,
  faUserTag,
  faUserTie,
  faViruses,
  faVoteYea,
  faWalking,
  faWonSign,
  faYenSign,
  faYinYang,
  faAppleAlt,
  faAsterisk,
  faBackward,
  faBacteria,
  faBookDead,
  faBookOpen,
  faBookmark,
  faBuilding,
  faBullhorn,
  faBullseye,
  faCalendar,
  faCannabis,
  faCapsules,
  faCarCrash,
  faCartPlus,
  faChartBar,
  faChartPie,
  faCloudSun,
  faCocktail,
  faComments,
  faCompress,
  faDatabase,
  faDemocrat,
  faDiceFive,
  faDiceFour,
  faDoorOpen,
  faDownload,
  faDumbbell,
  faDumpster,
  faEnvelope,
  faEthernet,
  faEuroSign,
  faEyeSlash,
  faFileCode,
  faFileWord,
  faFillDrip,
  faFirstAid,
  faGolfBall,
  faGrinBeam,
  faGrinWink,
  faHandRock,
  faHanukiah,
  faHospital,
  faIceCream,
  faIndustry,
  faInfinity,
  faKeyboard,
  faKissBeam,
  faKiwiBird,
  faLandmark,
  faLanguage,
  faLessThan,
  faLifeRing,
  faLiraSign,
  faLockOpen,
  faMailBulk,
  faMapSigns,
  faMehBlank,
  faMonument,
  faMountain,
  faNotEqual,
  faPassport,
  faPenFancy,
  faPhoneAlt,
  faPooStorm,
  faPortrait,
  faPowerOff,
  faPumpSoap,
  faQuestion,
  faReplyAll,
  faRestroom,
  faSeedling,
  faShareAlt,
  faSlidersH,
  faSnowplow,
  faSortDown,
  faSprayCan,
  faStarHalf,
  faStoreAlt,
  faSuitcase,
  faSurprise,
  faTerminal,
  faThumbsUp,
  faToggleOn,
  faTrashAlt,
  faUmbrella,
  faUserEdit,
  faUserLock,
  faUserPlus,
  faUsersCog,
  faUtensils,
  faVolumeUp,
  faAlignLeft,
  faAllergies,
  faAmbulance,
  faAngleDown,
  faAngleLeft,
  faArrowDown,
  faArrowLeft,
  faArrowsAlt,
  faBackspace,
  faBacterium,
  faBellSlash,
  faBiohazard,
  faBorderAll,
  faBoxTissue,
  faBriefcase,
  faCandyCane,
  faCaretDown,
  faCaretLeft,
  faChartArea,
  faChartLine,
  faChessKing,
  faChessPawn,
  faChessRook,
  faChevronUp,
  faClipboard,
  faCloudMoon,
  faCloudRain,
  faCopyright,
  faDiagnoses,
  faDiceThree,
  faDotCircle,
  faEllipsisH,
  faEllipsisV,
  faExpandAlt,
  faFileAudio,
  faFileExcel,
  faFileImage,
  faFileVideo,
  faFrownOpen,
  faGlobeAsia,
  faGrinStars,
  faGrinTears,
  faGripLines,
  faHamburger,
  faHandPaper,
  faHandPeace,
  faHandSpock,
  faHandsWash,
  faHandshake,
  faHatCowboy,
  faHatWizard,
  faHeartbeat,
  faHorseHead,
  faHourglass,
  faHouseUser,
  faIdCardAlt,
  faLaughBeam,
  faLaughWink,
  faLightbulb,
  faLowVision,
  faMapMarked,
  faMapMarker,
  faMicrochip,
  faMobileAlt,
  faMoneyBill,
  faNewspaper,
  faPaperclip,
  faParagraph,
  faPenSquare,
  faPencilAlt,
  faPepperHot,
  faPiggyBank,
  faPoundSign,
  faQuidditch,
  faQuoteLeft,
  faRadiation,
  faRssSquare,
  faRubleSign,
  faRupeeSign,
  faSatellite,
  faShieldAlt,
  faSignInAlt,
  faSignature,
  faSmileBeam,
  faSmileWink,
  faSnowflake,
  faStopwatch,
  faSubscript,
  faSynagogue,
  faTabletAlt,
  faTeethOpen,
  faTextWidth,
  faThumbtack,
  faTicketAlt,
  faTintSlash,
  faToggleOff,
  faToriiGate,
  faTrademark,
  faUnderline,
  faUnlockAlt,
  faUserCheck,
  faUserClock,
  faUserMinus,
  faUserNinja,
  faUserNurse,
  faUserSlash,
  faUserTimes,
  faVenusMars,
  faVoicemail,
  faVolumeOff,
  faWarehouse,
  faWineGlass,
  faAlignRight,
  faAngleRight,
  faArrowRight,
  faArrowsAltH,
  faArrowsAltV,
  faBinoculars,
  faBookReader,
  faBorderNone,
  faBreadSlice,
  faCalculator,
  faCampground,
  faCarBattery,
  faCaretRight,
  faChalkboard,
  faChessBoard,
  faChessQueen,
  faCodeBranch,
  faCommentAlt,
  faCookieBite,
  faCreditCard,
  faCrosshairs,
  faDirections,
  faDollarSign,
  faDoorClosed,
  faEyeDropper,
  faFeatherAlt,
  faFighterJet,
  faFileExport,
  faFileImport,
  faFileUpload,
  faFistRaised,
  faFolderOpen,
  faFolderPlus,
  faGenderless,
  faGrinHearts,
  faGrinSquint,
  faGrinTongue,
  faHandLizard,
  faHeadphones,
  faHelicopter,
  faHockeyPuck,
  faHollyBerry,
  faInfoCircle,
  faLaptopCode,
  faLayerGroup,
  faLevelUpAlt,
  faLungsVirus,
  faMarsDouble,
  faMarsStroke,
  faMicrophone,
  faMicroscope,
  faMoneyCheck,
  faMotorcycle,
  faPaintBrush,
  faPaperPlane,
  faPercentage,
  faPhoneSlash,
  faPhotoVideo,
  faPizzaSlice,
  faPlaneSlash,
  faPlayCircle,
  faPlusCircle,
  faPlusSquare,
  faProcedures,
  faQuoteRight,
  faRegistered,
  faRepublican,
  faSearchPlus,
  faShekelSign,
  faShoePrints,
  faShuttleVan,
  faSignOutAlt,
  faSmokingBan,
  faSolarPanel,
  faSpellCheck,
  faSquareFull,
  faStarOfLife,
  faStickyNote,
  faStopCircle,
  faStoreSlash,
  faStreetView,
  faSwatchbook,
  faTextHeight,
  faThumbsDown,
  faUniversity,
  faUserCircle,
  faUserSecret,
  faUserShield,
  faUsersSlash,
  faVideoSlash,
  faVirusSlash,
  faVolumeDown,
  faVolumeMute,
  faWaveSquare,
  faWheelchair,
  faWineBottle,
  faAddressBook,
  faAddressCard,
  faAlignCenter,
  faBatteryFull,
  faBatteryHalf,
  faBezierCurve,
  faBookMedical,
  faBorderStyle,
  faBowlingBall,
  faCalendarAlt,
  faCalendarDay,
  faCameraRetro,
  faCertificate,
  faCheckCircle,
  faCheckDouble,
  faCheckSquare,
  faChessBishop,
  faChessKnight,
  faChevronDown,
  faChevronLeft,
  faCircleNotch,
  faCommentDots,
  faCompactDisc,
  faCompressAlt,
  faDrawPolygon,
  faExchangeAlt,
  faExclamation,
  faFastForward,
  faFileArchive,
  faFileInvoice,
  faFileMedical,
  faFingerprint,
  faFolderMinus,
  faGlassCheers,
  faGlobeAfrica,
  faGlobeEurope,
  faGreaterThan,
  faHandHolding,
  faHandPointUp,
  faHandPointer,
  faHeartBroken,
  faHighlighter,
  faHospitalAlt,
  faHouseDamage,
  faLaptopHouse,
  faLaughSquint,
  faLuggageCart,
  faMarsStrokeH,
  faMarsStrokeV,
  faMinusCircle,
  faMinusSquare,
  faObjectGroup,
  faPaintRoller,
  faPauseCircle,
  faPencilRuler,
  faPeopleCarry,
  faPersonBooth,
  faPhoneSquare,
  faPhoneVolume,
  faPumpMedical,
  faPuzzlePiece,
  faRecordVinyl,
  faScrewdriver,
  faSearchMinus,
  faShareSquare,
  faShieldVirus,
  faShoppingBag,
  faSortAlphaUp,
  faStarHalfAlt,
  faStarOfDavid,
  faStepForward,
  faStethoscope,
  faStopwatch20,
  faStroopwafel,
  faSuperscript,
  faTableTennis,
  faThermometer,
  faTimesCircle,
  faToiletPaper,
  faTransgender,
  faTruckMoving,
  faTruckPickup,
  faUserFriends,
  faUserInjured,
  faVenusDouble,
  faVestPatches,
  faVrCardboard,
  faWindowClose,
  faAirFreshener,
  faAlignJustify,
  faBabyCarriage,
  faBalanceScale,
  faBaseballBall,
  faBatteryEmpty,
  faBirthdayCake,
  faBlenderPhone,
  faBusinessTime,
  faCalendarPlus,
  faCalendarWeek,
  faCashRegister,
  faChevronRight,
  faCloudSunRain,
  faCommentSlash,
  faDharmachakra,
  faDollyFlatbed,
  faDrumSteelpan,
  faDumpsterFire,
  faEnvelopeOpen,
  faFastBackward,
  faFileContract,
  faFileDownload,
  faFootballBall,
  faFunnelDollar,
  faGlassMartini,
  faGlassWhiskey,
  faGripVertical,
  faHandScissors,
  faHandSparkles,
  faHandsHelping,
  faHeadSideMask,
  faHospitalUser,
  faHourglassEnd,
  faLevelDownAlt,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faMoneyBillAlt,
  faMortarPestle,
  faMousePointer,
  faNetworkWired,
  faNotesMedical,
  faParachuteBox,
  faPeopleArrows,
  faPlaneArrival,
  faPrayingHands,
  faPrescription,
  faRadiationAlt,
  faRemoveFormat,
  faSearchDollar,
  faShippingFast,
  faShoppingCart,
  faSignLanguage,
  faSkiingNordic,
  faSnowboarding,
  faSortAmountUp,
  faSpaceShuttle,
  faStepBackward,
  faSwimmingPool,
  faTheaterMasks,
  faTrafficLight,
  faTrashRestore,
  faTruckLoading,
  faTruckMonster,
  faUserAltSlash,
  faUserGraduate,
  faUtensilSpoon,
  faVectorSquare,
  faWineGlassAlt,
  faAngleDoubleUp,
  faArrowCircleUp,
  faCalendarCheck,
  faCalendarMinus,
  faCalendarTimes,
  faCaretSquareUp,
  faCartArrowDown,
  faClinicMedical,
  faClipboardList,
  faCloudMeatball,
  faCloudMoonRain,
  faCommentDollar,
  faConciergeBell,
  faDrumstickBite,
  faFileSignature,
  faFlagCheckered,
  faGlobeAmericas,
  faGraduationCap,
  faGrinBeamSweat,
  faHandPointDown,
  faHandPointLeft,
  faHatCowboySide,
  faHeadSideCough,
  faHeadSideVirus,
  faHeadphonesAlt,
  faHourglassHalf,
  faJournalWhills,
  faKissWinkHeart,
  faLaptopMedical,
  faLessThanEqual,
  faLocationArrow,
  faMicrophoneAlt,
  faMoneyBillWave,
  faMoneyCheckAlt,
  faObjectUngroup,
  faRulerCombined,
  faRulerVertical,
  faSatelliteDish,
  faSortAlphaDown,
  faSortNumericUp,
  faSquareRootAlt,
  faStoreAltSlash,
  faStrikethrough,
  faTachometerAlt,
  faUmbrellaBeach,
  faUserAstronaut,
  faWeightHanging,
  faWindowRestore,
  faBasketballBall,
  faBatteryQuarter,
  faBroadcastTower,
  faClipboardCheck,
  faCloudUploadAlt,
  faCommentMedical,
  faCommentsDollar,
  faEnvelopeSquare,
  faFileMedicalAlt,
  faFilePowerpoint,
  faGrinTongueWink,
  faGripHorizontal,
  faHandHoldingUsd,
  faHandPointRight,
  faHandshakeSlash,
  faHospitalSymbol,
  faHourglassStart,
  faLongArrowAltUp,
  faMehRollingEyes,
  faPastafarianism,
  faPhoneSquareAlt,
  faPlaceOfWorship,
  faPlaneDeparture,
  faProjectDiagram,
  faQuestionCircle,
  faSearchLocation,
  faShareAltSquare,
  faShoppingBasket,
  faSortAlphaUpAlt,
  faSortAmountDown,
  faTemperatureLow,
  faTransgenderAlt,
  faVolleyballBall,
  faWindowMaximize,
  faWindowMinimize,
  faAngleDoubleDown,
  faAngleDoubleLeft,
  faArrowCircleDown,
  faArrowCircleLeft,
  faCaretSquareDown,
  faCaretSquareLeft,
  faChargingStation,
  faChevronCircleUp,
  faDraftingCompass,
  faExpandArrowsAlt,
  faExternalLinkAlt,
  faGlassMartiniAlt,
  faGrinSquintTears,
  faMicrophoneSlash,
  faRulerHorizontal,
  faSkullCrossbones,
  faSortAmountUpAlt,
  faSortNumericDown,
  faStarAndCrescent,
  faSuitcaseRolling,
  faTemperatureHigh,
  faThermometerFull,
  faThermometerHalf,
  faTrashRestoreAlt,
  faUniversalAccess,
  faAngleDoubleRight,
  faArrowAltCircleUp,
  faArrowCircleRight,
  faAudioDescription,
  faBalanceScaleLeft,
  faBriefcaseMedical,
  faCaretSquareRight,
  faClosedCaptioning,
  faCloudDownloadAlt,
  faEnvelopeOpenText,
  faFilePrescription,
  faFireExtinguisher,
  faGreaterThanEqual,
  faGrinTongueSquint,
  faHandHoldingHeart,
  faHandHoldingWater,
  faHandMiddleFinger,
  faLongArrowAltDown,
  faLongArrowAltLeft,
  faMoneyBillWaveAlt,
  faSortAlphaDownAlt,
  faSortNumericUpAlt,
  faThermometerEmpty,
  faToiletPaperSlash,
  faBalanceScaleRight,
  faChalkboardTeacher,
  faChevronCircleDown,
  faChevronCircleLeft,
  faCloudShowersHeavy,
  faCompressArrowsAlt,
  faDigitalTachograph,
  faExclamationCircle,
  faFileInvoiceDollar,
  faGripLinesVertical,
  faHandshakeAltSlash,
  faLongArrowAltRight,
  faSortAmountDownAlt,
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faChevronCircleRight,
  faHandHoldingMedical,
  faHeadSideCoughSlash,
  faMicrophoneAltSlash,
  faPrescriptionBottle,
  faSortNumericDownAlt,
  faThermometerQuarter,
  faArrowAltCircleRight,
  faExclamationTriangle,
  faFontAwesomeLogoFull,
  faBatteryThreeQuarters,
  faExternalLinkSquareAlt,
  faPrescriptionBottleAlt,
  faThermometerThreeQuarters,
  faAssistiveListeningSystems,
  faAmericanSignLanguageInterpreting,
} from '@fortawesome/free-solid-svg-icons';

export const AllIcons = (): React.ReactElement => {
  return (
    <Container>
      <h3 className="mt-5">All available Icons </h3>
      <FontAwesomeIcon icon={faAd} className="me-2" />
      <FontAwesomeIcon icon={faAddressBook} className="me-2" />
      <FontAwesomeIcon icon={faAddressCard} className="me-2" />
      <FontAwesomeIcon icon={faAdjust} className="me-2" />
      <FontAwesomeIcon icon={faAirFreshener} className="me-2" />
      <FontAwesomeIcon icon={faAlignCenter} className="me-2" />
      <FontAwesomeIcon icon={faAlignJustify} className="me-2" />
      <FontAwesomeIcon icon={faAlignLeft} className="me-2" />
      <FontAwesomeIcon icon={faAlignRight} className="me-2" />
      <FontAwesomeIcon icon={faAllergies} className="me-2" />
      <FontAwesomeIcon icon={faAmbulance} className="me-2" />
      <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} className="me-2" />
      <FontAwesomeIcon icon={faAnchor} className="me-2" />
      <FontAwesomeIcon icon={faAngleDoubleDown} className="me-2" />
      <FontAwesomeIcon icon={faAngleDoubleLeft} className="me-2" />
      <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
      <FontAwesomeIcon icon={faAngleDoubleUp} className="me-2" />
      <FontAwesomeIcon icon={faAngleDown} className="me-2" />
      <FontAwesomeIcon icon={faAngleLeft} className="me-2" />
      <FontAwesomeIcon icon={faAngleRight} className="me-2" />
      <FontAwesomeIcon icon={faAngleUp} className="me-2" />
      <FontAwesomeIcon icon={faAngry} className="me-2" />
      <FontAwesomeIcon icon={faAnkh} className="me-2" />
      <FontAwesomeIcon icon={faAppleAlt} className="me-2" />
      <FontAwesomeIcon icon={faArchive} className="me-2" />
      <FontAwesomeIcon icon={faArchway} className="me-2" />
      <FontAwesomeIcon icon={faArrowAltCircleDown} className="me-2" />
      <FontAwesomeIcon icon={faArrowAltCircleLeft} className="me-2" />
      <FontAwesomeIcon icon={faArrowAltCircleRight} className="me-2" />
      <FontAwesomeIcon icon={faArrowAltCircleUp} className="me-2" />
      <FontAwesomeIcon icon={faArrowCircleDown} className="me-2" />
      <FontAwesomeIcon icon={faArrowCircleLeft} className="me-2" />
      <FontAwesomeIcon icon={faArrowCircleRight} className="me-2" />
      <FontAwesomeIcon icon={faArrowCircleUp} className="me-2" />
      <FontAwesomeIcon icon={faArrowDown} className="me-2" />
      <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
      <FontAwesomeIcon icon={faArrowRight} className="me-2" />
      <FontAwesomeIcon icon={faArrowUp} className="me-2" />
      <FontAwesomeIcon icon={faArrowsAlt} className="me-2" />
      <FontAwesomeIcon icon={faArrowsAltH} className="me-2" />
      <FontAwesomeIcon icon={faArrowsAltV} className="me-2" />
      <FontAwesomeIcon icon={faAssistiveListeningSystems} className="me-2" />
      <FontAwesomeIcon icon={faAsterisk} className="me-2" />
      <FontAwesomeIcon icon={faAt} className="me-2" />
      <FontAwesomeIcon icon={faAtlas} className="me-2" />
      <FontAwesomeIcon icon={faAtom} className="me-2" />
      <FontAwesomeIcon icon={faAudioDescription} className="me-2" />
      <FontAwesomeIcon icon={faAward} className="me-2" />
      <FontAwesomeIcon icon={faBaby} className="me-2" />
      <FontAwesomeIcon icon={faBabyCarriage} className="me-2" />
      <FontAwesomeIcon icon={faBackspace} className="me-2" />
      <FontAwesomeIcon icon={faBackward} className="me-2" />
      <FontAwesomeIcon icon={faBacon} className="me-2" />
      <FontAwesomeIcon icon={faBacteria} className="me-2" />
      <FontAwesomeIcon icon={faBacterium} className="me-2" />
      <FontAwesomeIcon icon={faBahai} className="me-2" />
      <FontAwesomeIcon icon={faBalanceScale} className="me-2" />
      <FontAwesomeIcon icon={faBalanceScaleLeft} className="me-2" />
      <FontAwesomeIcon icon={faBalanceScaleRight} className="me-2" />
      <FontAwesomeIcon icon={faBan} className="me-2" />
      <FontAwesomeIcon icon={faBandAid} className="me-2" />
      <FontAwesomeIcon icon={faBarcode} className="me-2" />
      <FontAwesomeIcon icon={faBars} className="me-2" />
      <FontAwesomeIcon icon={faBaseballBall} className="me-2" />
      <FontAwesomeIcon icon={faBasketballBall} className="me-2" />
      <FontAwesomeIcon icon={faBath} className="me-2" />
      <FontAwesomeIcon icon={faBatteryEmpty} className="me-2" />
      <FontAwesomeIcon icon={faBatteryFull} className="me-2" />
      <FontAwesomeIcon icon={faBatteryHalf} className="me-2" />
      <FontAwesomeIcon icon={faBatteryQuarter} className="me-2" />
      <FontAwesomeIcon icon={faBatteryThreeQuarters} className="me-2" />
      <FontAwesomeIcon icon={faBed} className="me-2" />
      <FontAwesomeIcon icon={faBeer} className="me-2" />
      <FontAwesomeIcon icon={faBell} className="me-2" />
      <FontAwesomeIcon icon={faBellSlash} className="me-2" />
      <FontAwesomeIcon icon={faBezierCurve} className="me-2" />
      <FontAwesomeIcon icon={faBible} className="me-2" />
      <FontAwesomeIcon icon={faBicycle} className="me-2" />
      <FontAwesomeIcon icon={faBiking} className="me-2" />
      <FontAwesomeIcon icon={faBinoculars} className="me-2" />
      <FontAwesomeIcon icon={faBiohazard} className="me-2" />
      <FontAwesomeIcon icon={faBirthdayCake} className="me-2" />
      <FontAwesomeIcon icon={faBlender} className="me-2" />
      <FontAwesomeIcon icon={faBlenderPhone} className="me-2" />
      <FontAwesomeIcon icon={faBlind} className="me-2" />
      <FontAwesomeIcon icon={faBlog} className="me-2" />
      <FontAwesomeIcon icon={faBold} className="me-2" />
      <FontAwesomeIcon icon={faBolt} className="me-2" />
      <FontAwesomeIcon icon={faBomb} className="me-2" />
      <FontAwesomeIcon icon={faBone} className="me-2" />
      <FontAwesomeIcon icon={faBong} className="me-2" />
      <FontAwesomeIcon icon={faBook} className="me-2" />
      <FontAwesomeIcon icon={faBookDead} className="me-2" />
      <FontAwesomeIcon icon={faBookMedical} className="me-2" />
      <FontAwesomeIcon icon={faBookOpen} className="me-2" />
      <FontAwesomeIcon icon={faBookReader} className="me-2" />
      <FontAwesomeIcon icon={faBookmark} className="me-2" />
      <FontAwesomeIcon icon={faBorderAll} className="me-2" />
      <FontAwesomeIcon icon={faBorderNone} className="me-2" />
      <FontAwesomeIcon icon={faBorderStyle} className="me-2" />
      <FontAwesomeIcon icon={faBowlingBall} className="me-2" />
      <FontAwesomeIcon icon={faBox} className="me-2" />
      <FontAwesomeIcon icon={faBoxOpen} className="me-2" />
      <FontAwesomeIcon icon={faBoxTissue} className="me-2" />
      <FontAwesomeIcon icon={faBoxes} className="me-2" />
      <FontAwesomeIcon icon={faBraille} className="me-2" />
      <FontAwesomeIcon icon={faBrain} className="me-2" />
      <FontAwesomeIcon icon={faBreadSlice} className="me-2" />
      <FontAwesomeIcon icon={faBriefcase} className="me-2" />
      <FontAwesomeIcon icon={faBriefcaseMedical} className="me-2" />
      <FontAwesomeIcon icon={faBroadcastTower} className="me-2" />
      <FontAwesomeIcon icon={faBroom} className="me-2" />
      <FontAwesomeIcon icon={faBrush} className="me-2" />
      <FontAwesomeIcon icon={faBug} className="me-2" />
      <FontAwesomeIcon icon={faBuilding} className="me-2" />
      <FontAwesomeIcon icon={faBullhorn} className="me-2" />
      <FontAwesomeIcon icon={faBullseye} className="me-2" />
      <FontAwesomeIcon icon={faBurn} className="me-2" />
      <FontAwesomeIcon icon={faBus} className="me-2" />
      <FontAwesomeIcon icon={faBusAlt} className="me-2" />
      <FontAwesomeIcon icon={faBusinessTime} className="me-2" />
      <FontAwesomeIcon icon={faCalculator} className="me-2" />
      <FontAwesomeIcon icon={faCalendar} className="me-2" />
      <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
      <FontAwesomeIcon icon={faCalendarCheck} className="me-2" />
      <FontAwesomeIcon icon={faCalendarDay} className="me-2" />
      <FontAwesomeIcon icon={faCalendarMinus} className="me-2" />
      <FontAwesomeIcon icon={faCalendarPlus} className="me-2" />
      <FontAwesomeIcon icon={faCalendarTimes} className="me-2" />
      <FontAwesomeIcon icon={faCalendarWeek} className="me-2" />
      <FontAwesomeIcon icon={faCamera} className="me-2" />
      <FontAwesomeIcon icon={faCameraRetro} className="me-2" />
      <FontAwesomeIcon icon={faCampground} className="me-2" />
      <FontAwesomeIcon icon={faCandyCane} className="me-2" />
      <FontAwesomeIcon icon={faCannabis} className="me-2" />
      <FontAwesomeIcon icon={faCapsules} className="me-2" />
      <FontAwesomeIcon icon={faCar} className="me-2" />
      <FontAwesomeIcon icon={faCarAlt} className="me-2" />
      <FontAwesomeIcon icon={faCarBattery} className="me-2" />
      <FontAwesomeIcon icon={faCarCrash} className="me-2" />
      <FontAwesomeIcon icon={faCarSide} className="me-2" />
      <FontAwesomeIcon icon={faCaravan} className="me-2" />
      <FontAwesomeIcon icon={faCaretDown} className="me-2" />
      <FontAwesomeIcon icon={faCaretLeft} className="me-2" />
      <FontAwesomeIcon icon={faCaretRight} className="me-2" />
      <FontAwesomeIcon icon={faCaretSquareDown} className="me-2" />
      <FontAwesomeIcon icon={faCaretSquareLeft} className="me-2" />
      <FontAwesomeIcon icon={faCaretSquareRight} className="me-2" />
      <FontAwesomeIcon icon={faCaretSquareUp} className="me-2" />
      <FontAwesomeIcon icon={faCaretUp} className="me-2" />
      <FontAwesomeIcon icon={faCarrot} className="me-2" />
      <FontAwesomeIcon icon={faCartArrowDown} className="me-2" />
      <FontAwesomeIcon icon={faCartPlus} className="me-2" />
      <FontAwesomeIcon icon={faCashRegister} className="me-2" />
      <FontAwesomeIcon icon={faCat} className="me-2" />
      <FontAwesomeIcon icon={faCertificate} className="me-2" />
      <FontAwesomeIcon icon={faChair} className="me-2" />
      <FontAwesomeIcon icon={faChalkboard} className="me-2" />
      <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2" />
      <FontAwesomeIcon icon={faChargingStation} className="me-2" />
      <FontAwesomeIcon icon={faChartArea} className="me-2" />
      <FontAwesomeIcon icon={faChartBar} className="me-2" />
      <FontAwesomeIcon icon={faChartLine} className="me-2" />
      <FontAwesomeIcon icon={faChartPie} className="me-2" />
      <FontAwesomeIcon icon={faCheck} className="me-2" />
      <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
      <FontAwesomeIcon icon={faCheckDouble} className="me-2" />
      <FontAwesomeIcon icon={faCheckSquare} className="me-2" />
      <FontAwesomeIcon icon={faCheese} className="me-2" />
      <FontAwesomeIcon icon={faChess} className="me-2" />
      <FontAwesomeIcon icon={faChessBishop} className="me-2" />
      <FontAwesomeIcon icon={faChessBoard} className="me-2" />
      <FontAwesomeIcon icon={faChessKing} className="me-2" />
      <FontAwesomeIcon icon={faChessKnight} className="me-2" />
      <FontAwesomeIcon icon={faChessPawn} className="me-2" />
      <FontAwesomeIcon icon={faChessQueen} className="me-2" />
      <FontAwesomeIcon icon={faChessRook} className="me-2" />
      <FontAwesomeIcon icon={faChevronCircleDown} className="me-2" />
      <FontAwesomeIcon icon={faChevronCircleLeft} className="me-2" />
      <FontAwesomeIcon icon={faChevronCircleRight} className="me-2" />
      <FontAwesomeIcon icon={faChevronCircleUp} className="me-2" />
      <FontAwesomeIcon icon={faChevronDown} className="me-2" />
      <FontAwesomeIcon icon={faChevronLeft} className="me-2" />
      <FontAwesomeIcon icon={faChevronRight} className="me-2" />
      <FontAwesomeIcon icon={faChevronUp} className="me-2" />
      <FontAwesomeIcon icon={faChild} className="me-2" />
      <FontAwesomeIcon icon={faChurch} className="me-2" />
      <FontAwesomeIcon icon={faCircle} className="me-2" />
      <FontAwesomeIcon icon={faCircleNotch} className="me-2" />
      <FontAwesomeIcon icon={faCity} className="me-2" />
      <FontAwesomeIcon icon={faClinicMedical} className="me-2" />
      <FontAwesomeIcon icon={faClipboard} className="me-2" />
      <FontAwesomeIcon icon={faClipboardCheck} className="me-2" />
      <FontAwesomeIcon icon={faClipboardList} className="me-2" />
      <FontAwesomeIcon icon={faClock} className="me-2" />
      <FontAwesomeIcon icon={faClone} className="me-2" />
      <FontAwesomeIcon icon={faClosedCaptioning} className="me-2" />
      <FontAwesomeIcon icon={faCloud} className="me-2" />
      <FontAwesomeIcon icon={faCloudDownloadAlt} className="me-2" />
      <FontAwesomeIcon icon={faCloudMeatball} className="me-2" />
      <FontAwesomeIcon icon={faCloudMoon} className="me-2" />
      <FontAwesomeIcon icon={faCloudMoonRain} className="me-2" />
      <FontAwesomeIcon icon={faCloudRain} className="me-2" />
      <FontAwesomeIcon icon={faCloudShowersHeavy} className="me-2" />
      <FontAwesomeIcon icon={faCloudSun} className="me-2" />
      <FontAwesomeIcon icon={faCloudSunRain} className="me-2" />
      <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" />
      <FontAwesomeIcon icon={faCocktail} className="me-2" />
      <FontAwesomeIcon icon={faCode} className="me-2" />
      <FontAwesomeIcon icon={faCodeBranch} className="me-2" />
      <FontAwesomeIcon icon={faCoffee} className="me-2" />
      <FontAwesomeIcon icon={faCog} className="me-2" />
      <FontAwesomeIcon icon={faCogs} className="me-2" />
      <FontAwesomeIcon icon={faCoins} className="me-2" />
      <FontAwesomeIcon icon={faColumns} className="me-2" />
      <FontAwesomeIcon icon={faComment} className="me-2" />
      <FontAwesomeIcon icon={faCommentAlt} className="me-2" />
      <FontAwesomeIcon icon={faCommentDollar} className="me-2" />
      <FontAwesomeIcon icon={faCommentDots} className="me-2" />
      <FontAwesomeIcon icon={faCommentMedical} className="me-2" />
      <FontAwesomeIcon icon={faCommentSlash} className="me-2" />
      <FontAwesomeIcon icon={faComments} className="me-2" />
      <FontAwesomeIcon icon={faCommentsDollar} className="me-2" />
      <FontAwesomeIcon icon={faCompactDisc} className="me-2" />
      <FontAwesomeIcon icon={faCompass} className="me-2" />
      <FontAwesomeIcon icon={faCompress} className="me-2" />
      <FontAwesomeIcon icon={faCompressAlt} className="me-2" />
      <FontAwesomeIcon icon={faCompressArrowsAlt} className="me-2" />
      <FontAwesomeIcon icon={faConciergeBell} className="me-2" />
      <FontAwesomeIcon icon={faCookie} className="me-2" />
      <FontAwesomeIcon icon={faCookieBite} className="me-2" />
      <FontAwesomeIcon icon={faCopy} className="me-2" />
      <FontAwesomeIcon icon={faCopyright} className="me-2" />
      <FontAwesomeIcon icon={faCouch} className="me-2" />
      <FontAwesomeIcon icon={faCreditCard} className="me-2" />
      <FontAwesomeIcon icon={faCrop} className="me-2" />
      <FontAwesomeIcon icon={faCropAlt} className="me-2" />
      <FontAwesomeIcon icon={faCross} className="me-2" />
      <FontAwesomeIcon icon={faCrosshairs} className="me-2" />
      <FontAwesomeIcon icon={faCrow} className="me-2" />
      <FontAwesomeIcon icon={faCrown} className="me-2" />
      <FontAwesomeIcon icon={faCrutch} className="me-2" />
      <FontAwesomeIcon icon={faCube} className="me-2" />
      <FontAwesomeIcon icon={faCubes} className="me-2" />
      <FontAwesomeIcon icon={faCut} className="me-2" />
      <FontAwesomeIcon icon={faDatabase} className="me-2" />
      <FontAwesomeIcon icon={faDeaf} className="me-2" />
      <FontAwesomeIcon icon={faDemocrat} className="me-2" />
      <FontAwesomeIcon icon={faDesktop} className="me-2" />
      <FontAwesomeIcon icon={faDharmachakra} className="me-2" />
      <FontAwesomeIcon icon={faDiagnoses} className="me-2" />
      <FontAwesomeIcon icon={faDice} className="me-2" />
      <FontAwesomeIcon icon={faDiceD20} className="me-2" />
      <FontAwesomeIcon icon={faDiceD6} className="me-2" />
      <FontAwesomeIcon icon={faDiceFive} className="me-2" />
      <FontAwesomeIcon icon={faDiceFour} className="me-2" />
      <FontAwesomeIcon icon={faDiceOne} className="me-2" />
      <FontAwesomeIcon icon={faDiceSix} className="me-2" />
      <FontAwesomeIcon icon={faDiceThree} className="me-2" />
      <FontAwesomeIcon icon={faDiceTwo} className="me-2" />
      <FontAwesomeIcon icon={faDigitalTachograph} className="me-2" />
      <FontAwesomeIcon icon={faDirections} className="me-2" />
      <FontAwesomeIcon icon={faDisease} className="me-2" />
      <FontAwesomeIcon icon={faDivide} className="me-2" />
      <FontAwesomeIcon icon={faDizzy} className="me-2" />
      <FontAwesomeIcon icon={faDna} className="me-2" />
      <FontAwesomeIcon icon={faDog} className="me-2" />
      <FontAwesomeIcon icon={faDollarSign} className="me-2" />
      <FontAwesomeIcon icon={faDolly} className="me-2" />
      <FontAwesomeIcon icon={faDollyFlatbed} className="me-2" />
      <FontAwesomeIcon icon={faDonate} className="me-2" />
      <FontAwesomeIcon icon={faDoorClosed} className="me-2" />
      <FontAwesomeIcon icon={faDoorOpen} className="me-2" />
      <FontAwesomeIcon icon={faDotCircle} className="me-2" />
      <FontAwesomeIcon icon={faDove} className="me-2" />
      <FontAwesomeIcon icon={faDownload} className="me-2" />
      <FontAwesomeIcon icon={faDraftingCompass} className="me-2" />
      <FontAwesomeIcon icon={faDragon} className="me-2" />
      <FontAwesomeIcon icon={faDrawPolygon} className="me-2" />
      <FontAwesomeIcon icon={faDrum} className="me-2" />
      <FontAwesomeIcon icon={faDrumSteelpan} className="me-2" />
      <FontAwesomeIcon icon={faDrumstickBite} className="me-2" />
      <FontAwesomeIcon icon={faDumbbell} className="me-2" />
      <FontAwesomeIcon icon={faDumpster} className="me-2" />
      <FontAwesomeIcon icon={faDumpsterFire} className="me-2" />
      <FontAwesomeIcon icon={faDungeon} className="me-2" />
      <FontAwesomeIcon icon={faEdit} className="me-2" />
      <FontAwesomeIcon icon={faEgg} className="me-2" />
      <FontAwesomeIcon icon={faEject} className="me-2" />
      <FontAwesomeIcon icon={faEllipsisH} className="me-2" />
      <FontAwesomeIcon icon={faEllipsisV} className="me-2" />
      <FontAwesomeIcon icon={faEnvelope} className="me-2" />
      <FontAwesomeIcon icon={faEnvelopeOpen} className="me-2" />
      <FontAwesomeIcon icon={faEnvelopeOpenText} className="me-2" />
      <FontAwesomeIcon icon={faEnvelopeSquare} className="me-2" />
      <FontAwesomeIcon icon={faEquals} className="me-2" />
      <FontAwesomeIcon icon={faEraser} className="me-2" />
      <FontAwesomeIcon icon={faEthernet} className="me-2" />
      <FontAwesomeIcon icon={faEuroSign} className="me-2" />
      <FontAwesomeIcon icon={faExchangeAlt} className="me-2" />
      <FontAwesomeIcon icon={faExclamation} className="me-2" />
      <FontAwesomeIcon icon={faExclamationCircle} className="me-2" />
      <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
      <FontAwesomeIcon icon={faExpand} className="me-2" />
      <FontAwesomeIcon icon={faExpandAlt} className="me-2" />
      <FontAwesomeIcon icon={faExpandArrowsAlt} className="me-2" />
      <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
      <FontAwesomeIcon icon={faExternalLinkSquareAlt} className="me-2" />
      <FontAwesomeIcon icon={faEye} className="me-2" />
      <FontAwesomeIcon icon={faEyeDropper} className="me-2" />
      <FontAwesomeIcon icon={faEyeSlash} className="me-2" />
      <FontAwesomeIcon icon={faFan} className="me-2" />
      <FontAwesomeIcon icon={faFastBackward} className="me-2" />
      <FontAwesomeIcon icon={faFastForward} className="me-2" />
      <FontAwesomeIcon icon={faFaucet} className="me-2" />
      <FontAwesomeIcon icon={faFax} className="me-2" />
      <FontAwesomeIcon icon={faFeather} className="me-2" />
      <FontAwesomeIcon icon={faFeatherAlt} className="me-2" />
      <FontAwesomeIcon icon={faFemale} className="me-2" />
      <FontAwesomeIcon icon={faFighterJet} className="me-2" />
      <FontAwesomeIcon icon={faFile} className="me-2" />
      <FontAwesomeIcon icon={faFileAlt} className="me-2" />
      <FontAwesomeIcon icon={faFileArchive} className="me-2" />
      <FontAwesomeIcon icon={faFileAudio} className="me-2" />
      <FontAwesomeIcon icon={faFileCode} className="me-2" />
      <FontAwesomeIcon icon={faFileContract} className="me-2" />
      <FontAwesomeIcon icon={faFileCsv} className="me-2" />
      <FontAwesomeIcon icon={faFileDownload} className="me-2" />
      <FontAwesomeIcon icon={faFileExcel} className="me-2" />
      <FontAwesomeIcon icon={faFileExport} className="me-2" />
      <FontAwesomeIcon icon={faFileImage} className="me-2" />
      <FontAwesomeIcon icon={faFileImport} className="me-2" />
      <FontAwesomeIcon icon={faFileInvoice} className="me-2" />
      <FontAwesomeIcon icon={faFileInvoiceDollar} className="me-2" />
      <FontAwesomeIcon icon={faFileMedical} className="me-2" />
      <FontAwesomeIcon icon={faFileMedicalAlt} className="me-2" />
      <FontAwesomeIcon icon={faFilePdf} className="me-2" />
      <FontAwesomeIcon icon={faFilePowerpoint} className="me-2" />
      <FontAwesomeIcon icon={faFilePrescription} className="me-2" />
      <FontAwesomeIcon icon={faFileSignature} className="me-2" />
      <FontAwesomeIcon icon={faFileUpload} className="me-2" />
      <FontAwesomeIcon icon={faFileVideo} className="me-2" />
      <FontAwesomeIcon icon={faFileWord} className="me-2" />
      <FontAwesomeIcon icon={faFill} className="me-2" />
      <FontAwesomeIcon icon={faFillDrip} className="me-2" />
      <FontAwesomeIcon icon={faFilm} className="me-2" />
      <FontAwesomeIcon icon={faFilter} className="me-2" />
      <FontAwesomeIcon icon={faFingerprint} className="me-2" />
      <FontAwesomeIcon icon={faFire} className="me-2" />
      <FontAwesomeIcon icon={faFireAlt} className="me-2" />
      <FontAwesomeIcon icon={faFireExtinguisher} className="me-2" />
      <FontAwesomeIcon icon={faFirstAid} className="me-2" />
      <FontAwesomeIcon icon={faFish} className="me-2" />
      <FontAwesomeIcon icon={faFistRaised} className="me-2" />
      <FontAwesomeIcon icon={faFlag} className="me-2" />
      <FontAwesomeIcon icon={faFlagCheckered} className="me-2" />
      <FontAwesomeIcon icon={faFlagUsa} className="me-2" />
      <FontAwesomeIcon icon={faFlask} className="me-2" />
      <FontAwesomeIcon icon={faFlushed} className="me-2" />
      <FontAwesomeIcon icon={faFolder} className="me-2" />
      <FontAwesomeIcon icon={faFolderMinus} className="me-2" />
      <FontAwesomeIcon icon={faFolderOpen} className="me-2" />
      <FontAwesomeIcon icon={faFolderPlus} className="me-2" />
      <FontAwesomeIcon icon={faFont} className="me-2" />
      <FontAwesomeIcon icon={faFontAwesomeLogoFull} className="me-2" />
      <FontAwesomeIcon icon={faFootballBall} className="me-2" />
      <FontAwesomeIcon icon={faForward} className="me-2" />
      <FontAwesomeIcon icon={faFrog} className="me-2" />
      <FontAwesomeIcon icon={faFrown} className="me-2" />
      <FontAwesomeIcon icon={faFrownOpen} className="me-2" />
      <FontAwesomeIcon icon={faFunnelDollar} className="me-2" />
      <FontAwesomeIcon icon={faFutbol} className="me-2" />
      <FontAwesomeIcon icon={faGamepad} className="me-2" />
      <FontAwesomeIcon icon={faGasPump} className="me-2" />
      <FontAwesomeIcon icon={faGavel} className="me-2" />
      <FontAwesomeIcon icon={faGem} className="me-2" />
      <FontAwesomeIcon icon={faGenderless} className="me-2" />
      <FontAwesomeIcon icon={faGhost} className="me-2" />
      <FontAwesomeIcon icon={faGift} className="me-2" />
      <FontAwesomeIcon icon={faGifts} className="me-2" />
      <FontAwesomeIcon icon={faGlassCheers} className="me-2" />
      <FontAwesomeIcon icon={faGlassMartini} className="me-2" />
      <FontAwesomeIcon icon={faGlassMartiniAlt} className="me-2" />
      <FontAwesomeIcon icon={faGlassWhiskey} className="me-2" />
      <FontAwesomeIcon icon={faGlasses} className="me-2" />
      <FontAwesomeIcon icon={faGlobe} className="me-2" />
      <FontAwesomeIcon icon={faGlobeAfrica} className="me-2" />
      <FontAwesomeIcon icon={faGlobeAmericas} className="me-2" />
      <FontAwesomeIcon icon={faGlobeAsia} className="me-2" />
      <FontAwesomeIcon icon={faGlobeEurope} className="me-2" />
      <FontAwesomeIcon icon={faGolfBall} className="me-2" />
      <FontAwesomeIcon icon={faGopuram} className="me-2" />
      <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
      <FontAwesomeIcon icon={faGreaterThan} className="me-2" />
      <FontAwesomeIcon icon={faGreaterThanEqual} className="me-2" />
      <FontAwesomeIcon icon={faGrimace} className="me-2" />
      <FontAwesomeIcon icon={faGrin} className="me-2" />
      <FontAwesomeIcon icon={faGrinAlt} className="me-2" />
      <FontAwesomeIcon icon={faGrinBeam} className="me-2" />
      <FontAwesomeIcon icon={faGrinBeamSweat} className="me-2" />
      <FontAwesomeIcon icon={faGrinHearts} className="me-2" />
      <FontAwesomeIcon icon={faGrinSquint} className="me-2" />
      <FontAwesomeIcon icon={faGrinSquintTears} className="me-2" />
      <FontAwesomeIcon icon={faGrinStars} className="me-2" />
      <FontAwesomeIcon icon={faGrinTears} className="me-2" />
      <FontAwesomeIcon icon={faGrinTongue} className="me-2" />
      <FontAwesomeIcon icon={faGrinTongueSquint} className="me-2" />
      <FontAwesomeIcon icon={faGrinTongueWink} className="me-2" />
      <FontAwesomeIcon icon={faGrinWink} className="me-2" />
      <FontAwesomeIcon icon={faGripHorizontal} className="me-2" />
      <FontAwesomeIcon icon={faGripLines} className="me-2" />
      <FontAwesomeIcon icon={faGripLinesVertical} className="me-2" />
      <FontAwesomeIcon icon={faGripVertical} className="me-2" />
      <FontAwesomeIcon icon={faGuitar} className="me-2" />
      <FontAwesomeIcon icon={faHSquare} className="me-2" />
      <FontAwesomeIcon icon={faHamburger} className="me-2" />
      <FontAwesomeIcon icon={faHammer} className="me-2" />
      <FontAwesomeIcon icon={faHamsa} className="me-2" />
      <FontAwesomeIcon icon={faHandHolding} className="me-2" />
      <FontAwesomeIcon icon={faHandHoldingHeart} className="me-2" />
      <FontAwesomeIcon icon={faHandHoldingMedical} className="me-2" />
      <FontAwesomeIcon icon={faHandHoldingUsd} className="me-2" />
      <FontAwesomeIcon icon={faHandHoldingWater} className="me-2" />
      <FontAwesomeIcon icon={faHandLizard} className="me-2" />
      <FontAwesomeIcon icon={faHandMiddleFinger} className="me-2" />
      <FontAwesomeIcon icon={faHandPaper} className="me-2" />
      <FontAwesomeIcon icon={faHandPeace} className="me-2" />
      <FontAwesomeIcon icon={faHandPointDown} className="me-2" />
      <FontAwesomeIcon icon={faHandPointLeft} className="me-2" />
      <FontAwesomeIcon icon={faHandPointRight} className="me-2" />
      <FontAwesomeIcon icon={faHandPointUp} className="me-2" />
      <FontAwesomeIcon icon={faHandPointer} className="me-2" />
      <FontAwesomeIcon icon={faHandRock} className="me-2" />
      <FontAwesomeIcon icon={faHandScissors} className="me-2" />
      <FontAwesomeIcon icon={faHandSparkles} className="me-2" />
      <FontAwesomeIcon icon={faHandSpock} className="me-2" />
      <FontAwesomeIcon icon={faHands} className="me-2" />
      <FontAwesomeIcon icon={faHandsHelping} className="me-2" />
      <FontAwesomeIcon icon={faHandsWash} className="me-2" />
      <FontAwesomeIcon icon={faHandshake} className="me-2" />
      <FontAwesomeIcon icon={faHandshakeAltSlash} className="me-2" />
      <FontAwesomeIcon icon={faHandshakeSlash} className="me-2" />
      <FontAwesomeIcon icon={faHanukiah} className="me-2" />
      <FontAwesomeIcon icon={faHardHat} className="me-2" />
      <FontAwesomeIcon icon={faHashtag} className="me-2" />
      <FontAwesomeIcon icon={faHatCowboy} className="me-2" />
      <FontAwesomeIcon icon={faHatCowboySide} className="me-2" />
      <FontAwesomeIcon icon={faHatWizard} className="me-2" />
      <FontAwesomeIcon icon={faHdd} className="me-2" />
      <FontAwesomeIcon icon={faHeadSideCough} className="me-2" />
      <FontAwesomeIcon icon={faHeadSideCoughSlash} className="me-2" />
      <FontAwesomeIcon icon={faHeadSideMask} className="me-2" />
      <FontAwesomeIcon icon={faHeadSideVirus} className="me-2" />
      <FontAwesomeIcon icon={faHeading} className="me-2" />
      <FontAwesomeIcon icon={faHeadphones} className="me-2" />
      <FontAwesomeIcon icon={faHeadphonesAlt} className="me-2" />
      <FontAwesomeIcon icon={faHeadset} className="me-2" />
      <FontAwesomeIcon icon={faHeart} className="me-2" />
      <FontAwesomeIcon icon={faHeartBroken} className="me-2" />
      <FontAwesomeIcon icon={faHeartbeat} className="me-2" />
      <FontAwesomeIcon icon={faHelicopter} className="me-2" />
      <FontAwesomeIcon icon={faHighlighter} className="me-2" />
      <FontAwesomeIcon icon={faHiking} className="me-2" />
      <FontAwesomeIcon icon={faHippo} className="me-2" />
      <FontAwesomeIcon icon={faHistory} className="me-2" />
      <FontAwesomeIcon icon={faHockeyPuck} className="me-2" />
      <FontAwesomeIcon icon={faHollyBerry} className="me-2" />
      <FontAwesomeIcon icon={faHome} className="me-2" />
      <FontAwesomeIcon icon={faHorse} className="me-2" />
      <FontAwesomeIcon icon={faHorseHead} className="me-2" />
      <FontAwesomeIcon icon={faHospital} className="me-2" />
      <FontAwesomeIcon icon={faHospitalAlt} className="me-2" />
      <FontAwesomeIcon icon={faHospitalSymbol} className="me-2" />
      <FontAwesomeIcon icon={faHospitalUser} className="me-2" />
      <FontAwesomeIcon icon={faHotTub} className="me-2" />
      <FontAwesomeIcon icon={faHotdog} className="me-2" />
      <FontAwesomeIcon icon={faHotel} className="me-2" />
      <FontAwesomeIcon icon={faHourglass} className="me-2" />
      <FontAwesomeIcon icon={faHourglassEnd} className="me-2" />
      <FontAwesomeIcon icon={faHourglassHalf} className="me-2" />
      <FontAwesomeIcon icon={faHourglassStart} className="me-2" />
      <FontAwesomeIcon icon={faHouseDamage} className="me-2" />
      <FontAwesomeIcon icon={faHouseUser} className="me-2" />
      <FontAwesomeIcon icon={faHryvnia} className="me-2" />
      <FontAwesomeIcon icon={faICursor} className="me-2" />
      <FontAwesomeIcon icon={faIceCream} className="me-2" />
      <FontAwesomeIcon icon={faIcicles} className="me-2" />
      <FontAwesomeIcon icon={faIcons} className="me-2" />
      <FontAwesomeIcon icon={faIdBadge} className="me-2" />
      <FontAwesomeIcon icon={faIdCard} className="me-2" />
      <FontAwesomeIcon icon={faIdCardAlt} className="me-2" />
      <FontAwesomeIcon icon={faIgloo} className="me-2" />
      <FontAwesomeIcon icon={faImage} className="me-2" />
      <FontAwesomeIcon icon={faImages} className="me-2" />
      <FontAwesomeIcon icon={faInbox} className="me-2" />
      <FontAwesomeIcon icon={faIndent} className="me-2" />
      <FontAwesomeIcon icon={faIndustry} className="me-2" />
      <FontAwesomeIcon icon={faInfinity} className="me-2" />
      <FontAwesomeIcon icon={faInfo} className="me-2" />
      <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
      <FontAwesomeIcon icon={faItalic} className="me-2" />
      <FontAwesomeIcon icon={faJedi} className="me-2" />
      <FontAwesomeIcon icon={faJoint} className="me-2" />
      <FontAwesomeIcon icon={faJournalWhills} className="me-2" />
      <FontAwesomeIcon icon={faKaaba} className="me-2" />
      <FontAwesomeIcon icon={faKey} className="me-2" />
      <FontAwesomeIcon icon={faKeyboard} className="me-2" />
      <FontAwesomeIcon icon={faKhanda} className="me-2" />
      <FontAwesomeIcon icon={faKiss} className="me-2" />
      <FontAwesomeIcon icon={faKissBeam} className="me-2" />
      <FontAwesomeIcon icon={faKissWinkHeart} className="me-2" />
      <FontAwesomeIcon icon={faKiwiBird} className="me-2" />
      <FontAwesomeIcon icon={faLandmark} className="me-2" />
      <FontAwesomeIcon icon={faLanguage} className="me-2" />
      <FontAwesomeIcon icon={faLaptop} className="me-2" />
      <FontAwesomeIcon icon={faLaptopCode} className="me-2" />
      <FontAwesomeIcon icon={faLaptopHouse} className="me-2" />
      <FontAwesomeIcon icon={faLaptopMedical} className="me-2" />
      <FontAwesomeIcon icon={faLaugh} className="me-2" />
      <FontAwesomeIcon icon={faLaughBeam} className="me-2" />
      <FontAwesomeIcon icon={faLaughSquint} className="me-2" />
      <FontAwesomeIcon icon={faLaughWink} className="me-2" />
      <FontAwesomeIcon icon={faLayerGroup} className="me-2" />
      <FontAwesomeIcon icon={faLeaf} className="me-2" />
      <FontAwesomeIcon icon={faLemon} className="me-2" />
      <FontAwesomeIcon icon={faLessThan} className="me-2" />
      <FontAwesomeIcon icon={faLessThanEqual} className="me-2" />
      <FontAwesomeIcon icon={faLevelDownAlt} className="me-2" />
      <FontAwesomeIcon icon={faLevelUpAlt} className="me-2" />
      <FontAwesomeIcon icon={faLifeRing} className="me-2" />
      <FontAwesomeIcon icon={faLightbulb} className="me-2" />
      <FontAwesomeIcon icon={faLink} className="me-2" />
      <FontAwesomeIcon icon={faLiraSign} className="me-2" />
      <FontAwesomeIcon icon={faList} className="me-2" />
      <FontAwesomeIcon icon={faListAlt} className="me-2" />
      <FontAwesomeIcon icon={faListOl} className="me-2" />
      <FontAwesomeIcon icon={faListUl} className="me-2" />
      <FontAwesomeIcon icon={faLocationArrow} className="me-2" />
      <FontAwesomeIcon icon={faLock} className="me-2" />
      <FontAwesomeIcon icon={faLockOpen} className="me-2" />
      <FontAwesomeIcon icon={faLongArrowAltDown} className="me-2" />
      <FontAwesomeIcon icon={faLongArrowAltLeft} className="me-2" />
      <FontAwesomeIcon icon={faLongArrowAltRight} className="me-2" />
      <FontAwesomeIcon icon={faLongArrowAltUp} className="me-2" />
      <FontAwesomeIcon icon={faLowVision} className="me-2" />
      <FontAwesomeIcon icon={faLuggageCart} className="me-2" />
      <FontAwesomeIcon icon={faLungs} className="me-2" />
      <FontAwesomeIcon icon={faLungsVirus} className="me-2" />
      <FontAwesomeIcon icon={faMagic} className="me-2" />
      <FontAwesomeIcon icon={faMagnet} className="me-2" />
      <FontAwesomeIcon icon={faMailBulk} className="me-2" />
      <FontAwesomeIcon icon={faMale} className="me-2" />
      <FontAwesomeIcon icon={faMap} className="me-2" />
      <FontAwesomeIcon icon={faMapMarked} className="me-2" />
      <FontAwesomeIcon icon={faMapMarkedAlt} className="me-2" />
      <FontAwesomeIcon icon={faMapMarker} className="me-2" />
      <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
      <FontAwesomeIcon icon={faMapPin} className="me-2" />
      <FontAwesomeIcon icon={faMapSigns} className="me-2" />
      <FontAwesomeIcon icon={faMarker} className="me-2" />
      <FontAwesomeIcon icon={faMars} className="me-2" />
      <FontAwesomeIcon icon={faMarsDouble} className="me-2" />
      <FontAwesomeIcon icon={faMarsStroke} className="me-2" />
      <FontAwesomeIcon icon={faMarsStrokeH} className="me-2" />
      <FontAwesomeIcon icon={faMarsStrokeV} className="me-2" />
      <FontAwesomeIcon icon={faMask} className="me-2" />
      <FontAwesomeIcon icon={faMedal} className="me-2" />
      <FontAwesomeIcon icon={faMedkit} className="me-2" />
      <FontAwesomeIcon icon={faMeh} className="me-2" />
      <FontAwesomeIcon icon={faMehBlank} className="me-2" />
      <FontAwesomeIcon icon={faMehRollingEyes} className="me-2" />
      <FontAwesomeIcon icon={faMemory} className="me-2" />
      <FontAwesomeIcon icon={faMenorah} className="me-2" />
      <FontAwesomeIcon icon={faMercury} className="me-2" />
      <FontAwesomeIcon icon={faMeteor} className="me-2" />
      <FontAwesomeIcon icon={faMicrochip} className="me-2" />
      <FontAwesomeIcon icon={faMicrophone} className="me-2" />
      <FontAwesomeIcon icon={faMicrophoneAlt} className="me-2" />
      <FontAwesomeIcon icon={faMicrophoneAltSlash} className="me-2" />
      <FontAwesomeIcon icon={faMicrophoneSlash} className="me-2" />
      <FontAwesomeIcon icon={faMicroscope} className="me-2" />
      <FontAwesomeIcon icon={faMinus} className="me-2" />
      <FontAwesomeIcon icon={faMinusCircle} className="me-2" />
      <FontAwesomeIcon icon={faMinusSquare} className="me-2" />
      <FontAwesomeIcon icon={faMitten} className="me-2" />
      <FontAwesomeIcon icon={faMobile} className="me-2" />
      <FontAwesomeIcon icon={faMobileAlt} className="me-2" />
      <FontAwesomeIcon icon={faMoneyBill} className="me-2" />
      <FontAwesomeIcon icon={faMoneyBillAlt} className="me-2" />
      <FontAwesomeIcon icon={faMoneyBillWave} className="me-2" />
      <FontAwesomeIcon icon={faMoneyBillWaveAlt} className="me-2" />
      <FontAwesomeIcon icon={faMoneyCheck} className="me-2" />
      <FontAwesomeIcon icon={faMoneyCheckAlt} className="me-2" />
      <FontAwesomeIcon icon={faMonument} className="me-2" />
      <FontAwesomeIcon icon={faMoon} className="me-2" />
      <FontAwesomeIcon icon={faMortarPestle} className="me-2" />
      <FontAwesomeIcon icon={faMosque} className="me-2" />
      <FontAwesomeIcon icon={faMotorcycle} className="me-2" />
      <FontAwesomeIcon icon={faMountain} className="me-2" />
      <FontAwesomeIcon icon={faMouse} className="me-2" />
      <FontAwesomeIcon icon={faMousePointer} className="me-2" />
      <FontAwesomeIcon icon={faMugHot} className="me-2" />
      <FontAwesomeIcon icon={faMusic} className="me-2" />
      <FontAwesomeIcon icon={faNetworkWired} className="me-2" />
      <FontAwesomeIcon icon={faNeuter} className="me-2" />
      <FontAwesomeIcon icon={faNewspaper} className="me-2" />
      <FontAwesomeIcon icon={faNotEqual} className="me-2" />
      <FontAwesomeIcon icon={faNotesMedical} className="me-2" />
      <FontAwesomeIcon icon={faObjectGroup} className="me-2" />
      <FontAwesomeIcon icon={faObjectUngroup} className="me-2" />
      <FontAwesomeIcon icon={faOilCan} className="me-2" />
      <FontAwesomeIcon icon={faOm} className="me-2" />
      <FontAwesomeIcon icon={faOtter} className="me-2" />
      <FontAwesomeIcon icon={faOutdent} className="me-2" />
      <FontAwesomeIcon icon={faPager} className="me-2" />
      <FontAwesomeIcon icon={faPaintBrush} className="me-2" />
      <FontAwesomeIcon icon={faPaintRoller} className="me-2" />
      <FontAwesomeIcon icon={faPalette} className="me-2" />
      <FontAwesomeIcon icon={faPallet} className="me-2" />
      <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
      <FontAwesomeIcon icon={faPaperclip} className="me-2" />
      <FontAwesomeIcon icon={faParachuteBox} className="me-2" />
      <FontAwesomeIcon icon={faParagraph} className="me-2" />
      <FontAwesomeIcon icon={faParking} className="me-2" />
      <FontAwesomeIcon icon={faPassport} className="me-2" />
      <FontAwesomeIcon icon={faPastafarianism} className="me-2" />
      <FontAwesomeIcon icon={faPaste} className="me-2" />
      <FontAwesomeIcon icon={faPause} className="me-2" />
      <FontAwesomeIcon icon={faPauseCircle} className="me-2" />
      <FontAwesomeIcon icon={faPaw} className="me-2" />
      <FontAwesomeIcon icon={faPeace} className="me-2" />
      <FontAwesomeIcon icon={faPen} className="me-2" />
      <FontAwesomeIcon icon={faPenAlt} className="me-2" />
      <FontAwesomeIcon icon={faPenFancy} className="me-2" />
      <FontAwesomeIcon icon={faPenNib} className="me-2" />
      <FontAwesomeIcon icon={faPenSquare} className="me-2" />
      <FontAwesomeIcon icon={faPencilAlt} className="me-2" />
      <FontAwesomeIcon icon={faPencilRuler} className="me-2" />
      <FontAwesomeIcon icon={faPeopleArrows} className="me-2" />
      <FontAwesomeIcon icon={faPeopleCarry} className="me-2" />
      <FontAwesomeIcon icon={faPepperHot} className="me-2" />
      <FontAwesomeIcon icon={faPercent} className="me-2" />
      <FontAwesomeIcon icon={faPercentage} className="me-2" />
      <FontAwesomeIcon icon={faPersonBooth} className="me-2" />
      <FontAwesomeIcon icon={faPhone} className="me-2" />
      <FontAwesomeIcon icon={faPhoneAlt} className="me-2" />
      <FontAwesomeIcon icon={faPhoneSlash} className="me-2" />
      <FontAwesomeIcon icon={faPhoneSquare} className="me-2" />
      <FontAwesomeIcon icon={faPhoneSquareAlt} className="me-2" />
      <FontAwesomeIcon icon={faPhoneVolume} className="me-2" />
      <FontAwesomeIcon icon={faPhotoVideo} className="me-2" />
      <FontAwesomeIcon icon={faPiggyBank} className="me-2" />
      <FontAwesomeIcon icon={faPills} className="me-2" />
      <FontAwesomeIcon icon={faPizzaSlice} className="me-2" />
      <FontAwesomeIcon icon={faPlaceOfWorship} className="me-2" />
      <FontAwesomeIcon icon={faPlane} className="me-2" />
      <FontAwesomeIcon icon={faPlaneArrival} className="me-2" />
      <FontAwesomeIcon icon={faPlaneDeparture} className="me-2" />
      <FontAwesomeIcon icon={faPlaneSlash} className="me-2" />
      <FontAwesomeIcon icon={faPlay} className="me-2" />
      <FontAwesomeIcon icon={faPlayCircle} className="me-2" />
      <FontAwesomeIcon icon={faPlug} className="me-2" />
      <FontAwesomeIcon icon={faPlus} className="me-2" />
      <FontAwesomeIcon icon={faPlusCircle} className="me-2" />
      <FontAwesomeIcon icon={faPlusSquare} className="me-2" />
      <FontAwesomeIcon icon={faPodcast} className="me-2" />
      <FontAwesomeIcon icon={faPoll} className="me-2" />
      <FontAwesomeIcon icon={faPollH} className="me-2" />
      <FontAwesomeIcon icon={faPoo} className="me-2" />
      <FontAwesomeIcon icon={faPooStorm} className="me-2" />
      <FontAwesomeIcon icon={faPoop} className="me-2" />
      <FontAwesomeIcon icon={faPortrait} className="me-2" />
      <FontAwesomeIcon icon={faPoundSign} className="me-2" />
      <FontAwesomeIcon icon={faPowerOff} className="me-2" />
      <FontAwesomeIcon icon={faPray} className="me-2" />
      <FontAwesomeIcon icon={faPrayingHands} className="me-2" />
      <FontAwesomeIcon icon={faPrescription} className="me-2" />
      <FontAwesomeIcon icon={faPrescriptionBottle} className="me-2" />
      <FontAwesomeIcon icon={faPrescriptionBottleAlt} className="me-2" />
      <FontAwesomeIcon icon={faPrint} className="me-2" />
      <FontAwesomeIcon icon={faProcedures} className="me-2" />
      <FontAwesomeIcon icon={faProjectDiagram} className="me-2" />
      <FontAwesomeIcon icon={faPumpMedical} className="me-2" />
      <FontAwesomeIcon icon={faPumpSoap} className="me-2" />
      <FontAwesomeIcon icon={faPuzzlePiece} className="me-2" />
      <FontAwesomeIcon icon={faQrcode} className="me-2" />
      <FontAwesomeIcon icon={faQuestion} className="me-2" />
      <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
      <FontAwesomeIcon icon={faQuidditch} className="me-2" />
      <FontAwesomeIcon icon={faQuoteLeft} className="me-2" />
      <FontAwesomeIcon icon={faQuoteRight} className="me-2" />
      <FontAwesomeIcon icon={faQuran} className="me-2" />
      <FontAwesomeIcon icon={faRadiation} className="me-2" />
      <FontAwesomeIcon icon={faRadiationAlt} className="me-2" />
      <FontAwesomeIcon icon={faRainbow} className="me-2" />
      <FontAwesomeIcon icon={faRandom} className="me-2" />
      <FontAwesomeIcon icon={faReceipt} className="me-2" />
      <FontAwesomeIcon icon={faRecordVinyl} className="me-2" />
      <FontAwesomeIcon icon={faRecycle} className="me-2" />
      <FontAwesomeIcon icon={faRedo} className="me-2" />
      <FontAwesomeIcon icon={faRedoAlt} className="me-2" />
      <FontAwesomeIcon icon={faRegistered} className="me-2" />
      <FontAwesomeIcon icon={faRemoveFormat} className="me-2" />
      <FontAwesomeIcon icon={faReply} className="me-2" />
      <FontAwesomeIcon icon={faReplyAll} className="me-2" />
      <FontAwesomeIcon icon={faRepublican} className="me-2" />
      <FontAwesomeIcon icon={faRestroom} className="me-2" />
      <FontAwesomeIcon icon={faRetweet} className="me-2" />
      <FontAwesomeIcon icon={faRibbon} className="me-2" />
      <FontAwesomeIcon icon={faRing} className="me-2" />
      <FontAwesomeIcon icon={faRoad} className="me-2" />
      <FontAwesomeIcon icon={faRobot} className="me-2" />
      <FontAwesomeIcon icon={faRocket} className="me-2" />
      <FontAwesomeIcon icon={faRoute} className="me-2" />
      <FontAwesomeIcon icon={faRss} className="me-2" />
      <FontAwesomeIcon icon={faRssSquare} className="me-2" />
      <FontAwesomeIcon icon={faRubleSign} className="me-2" />
      <FontAwesomeIcon icon={faRuler} className="me-2" />
      <FontAwesomeIcon icon={faRulerCombined} className="me-2" />
      <FontAwesomeIcon icon={faRulerHorizontal} className="me-2" />
      <FontAwesomeIcon icon={faRulerVertical} className="me-2" />
      <FontAwesomeIcon icon={faRunning} className="me-2" />
      <FontAwesomeIcon icon={faRupeeSign} className="me-2" />
      <FontAwesomeIcon icon={faSadCry} className="me-2" />
      <FontAwesomeIcon icon={faSadTear} className="me-2" />
      <FontAwesomeIcon icon={faSatellite} className="me-2" />
      <FontAwesomeIcon icon={faSatelliteDish} className="me-2" />
      <FontAwesomeIcon icon={faSave} className="me-2" />
      <FontAwesomeIcon icon={faSchool} className="me-2" />
      <FontAwesomeIcon icon={faScrewdriver} className="me-2" />
      <FontAwesomeIcon icon={faScroll} className="me-2" />
      <FontAwesomeIcon icon={faSdCard} className="me-2" />
      <FontAwesomeIcon icon={faSearch} className="me-2" />
      <FontAwesomeIcon icon={faSearchDollar} className="me-2" />
      <FontAwesomeIcon icon={faSearchLocation} className="me-2" />
      <FontAwesomeIcon icon={faSearchMinus} className="me-2" />
      <FontAwesomeIcon icon={faSearchPlus} className="me-2" />
      <FontAwesomeIcon icon={faSeedling} className="me-2" />
      <FontAwesomeIcon icon={faServer} className="me-2" />
      <FontAwesomeIcon icon={faShapes} className="me-2" />
      <FontAwesomeIcon icon={faShare} className="me-2" />
      <FontAwesomeIcon icon={faShareAlt} className="me-2" />
      <FontAwesomeIcon icon={faShareAltSquare} className="me-2" />
      <FontAwesomeIcon icon={faShareSquare} className="me-2" />
      <FontAwesomeIcon icon={faShekelSign} className="me-2" />
      <FontAwesomeIcon icon={faShieldAlt} className="me-2" />
      <FontAwesomeIcon icon={faShieldVirus} className="me-2" />
      <FontAwesomeIcon icon={faShip} className="me-2" />
      <FontAwesomeIcon icon={faShippingFast} className="me-2" />
      <FontAwesomeIcon icon={faShoePrints} className="me-2" />
      <FontAwesomeIcon icon={faShoppingBag} className="me-2" />
      <FontAwesomeIcon icon={faShoppingBasket} className="me-2" />
      <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
      <FontAwesomeIcon icon={faShower} className="me-2" />
      <FontAwesomeIcon icon={faShuttleVan} className="me-2" />
      <FontAwesomeIcon icon={faSign} className="me-2" />
      <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
      <FontAwesomeIcon icon={faSignLanguage} className="me-2" />
      <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
      <FontAwesomeIcon icon={faSignal} className="me-2" />
      <FontAwesomeIcon icon={faSignature} className="me-2" />
      <FontAwesomeIcon icon={faSimCard} className="me-2" />
      <FontAwesomeIcon icon={faSink} className="me-2" />
      <FontAwesomeIcon icon={faSitemap} className="me-2" />
      <FontAwesomeIcon icon={faSkating} className="me-2" />
      <FontAwesomeIcon icon={faSkiing} className="me-2" />
      <FontAwesomeIcon icon={faSkiingNordic} className="me-2" />
      <FontAwesomeIcon icon={faSkull} className="me-2" />
      <FontAwesomeIcon icon={faSkullCrossbones} className="me-2" />
      <FontAwesomeIcon icon={faSlash} className="me-2" />
      <FontAwesomeIcon icon={faSleigh} className="me-2" />
      <FontAwesomeIcon icon={faSlidersH} className="me-2" />
      <FontAwesomeIcon icon={faSmile} className="me-2" />
      <FontAwesomeIcon icon={faSmileBeam} className="me-2" />
      <FontAwesomeIcon icon={faSmileWink} className="me-2" />
      <FontAwesomeIcon icon={faSmog} className="me-2" />
      <FontAwesomeIcon icon={faSmoking} className="me-2" />
      <FontAwesomeIcon icon={faSmokingBan} className="me-2" />
      <FontAwesomeIcon icon={faSms} className="me-2" />
      <FontAwesomeIcon icon={faSnowboarding} className="me-2" />
      <FontAwesomeIcon icon={faSnowflake} className="me-2" />
      <FontAwesomeIcon icon={faSnowman} className="me-2" />
      <FontAwesomeIcon icon={faSnowplow} className="me-2" />
      <FontAwesomeIcon icon={faSoap} className="me-2" />
      <FontAwesomeIcon icon={faSocks} className="me-2" />
      <FontAwesomeIcon icon={faSolarPanel} className="me-2" />
      <FontAwesomeIcon icon={faSort} className="me-2" />
      <FontAwesomeIcon icon={faSortAlphaDown} className="me-2" />
      <FontAwesomeIcon icon={faSortAlphaDownAlt} className="me-2" />
      <FontAwesomeIcon icon={faSortAlphaUp} className="me-2" />
      <FontAwesomeIcon icon={faSortAlphaUpAlt} className="me-2" />
      <FontAwesomeIcon icon={faSortAmountDown} className="me-2" />
      <FontAwesomeIcon icon={faSortAmountDownAlt} className="me-2" />
      <FontAwesomeIcon icon={faSortAmountUp} className="me-2" />
      <FontAwesomeIcon icon={faSortAmountUpAlt} className="me-2" />
      <FontAwesomeIcon icon={faSortDown} className="me-2" />
      <FontAwesomeIcon icon={faSortNumericDown} className="me-2" />
      <FontAwesomeIcon icon={faSortNumericDownAlt} className="me-2" />
      <FontAwesomeIcon icon={faSortNumericUp} className="me-2" />
      <FontAwesomeIcon icon={faSortNumericUpAlt} className="me-2" />
      <FontAwesomeIcon icon={faSortUp} className="me-2" />
      <FontAwesomeIcon icon={faSpa} className="me-2" />
      <FontAwesomeIcon icon={faSpaceShuttle} className="me-2" />
      <FontAwesomeIcon icon={faSpellCheck} className="me-2" />
      <FontAwesomeIcon icon={faSpider} className="me-2" />
      <FontAwesomeIcon icon={faSpinner} className="me-2" />
      <FontAwesomeIcon icon={faSplotch} className="me-2" />
      <FontAwesomeIcon icon={faSprayCan} className="me-2" />
      <FontAwesomeIcon icon={faSquare} className="me-2" />
      <FontAwesomeIcon icon={faSquareFull} className="me-2" />
      <FontAwesomeIcon icon={faSquareRootAlt} className="me-2" />
      <FontAwesomeIcon icon={faStamp} className="me-2" />
      <FontAwesomeIcon icon={faStar} className="me-2" />
      <FontAwesomeIcon icon={faStarAndCrescent} className="me-2" />
      <FontAwesomeIcon icon={faStarHalf} className="me-2" />
      <FontAwesomeIcon icon={faStarHalfAlt} className="me-2" />
      <FontAwesomeIcon icon={faStarOfDavid} className="me-2" />
      <FontAwesomeIcon icon={faStarOfLife} className="me-2" />
      <FontAwesomeIcon icon={faStepBackward} className="me-2" />
      <FontAwesomeIcon icon={faStepForward} className="me-2" />
      <FontAwesomeIcon icon={faStethoscope} className="me-2" />
      <FontAwesomeIcon icon={faStickyNote} className="me-2" />
      <FontAwesomeIcon icon={faStop} className="me-2" />
      <FontAwesomeIcon icon={faStopCircle} className="me-2" />
      <FontAwesomeIcon icon={faStopwatch} className="me-2" />
      <FontAwesomeIcon icon={faStopwatch20} className="me-2" />
      <FontAwesomeIcon icon={faStore} className="me-2" />
      <FontAwesomeIcon icon={faStoreAlt} className="me-2" />
      <FontAwesomeIcon icon={faStoreAltSlash} className="me-2" />
      <FontAwesomeIcon icon={faStoreSlash} className="me-2" />
      <FontAwesomeIcon icon={faStream} className="me-2" />
      <FontAwesomeIcon icon={faStreetView} className="me-2" />
      <FontAwesomeIcon icon={faStrikethrough} className="me-2" />
      <FontAwesomeIcon icon={faStroopwafel} className="me-2" />
      <FontAwesomeIcon icon={faSubscript} className="me-2" />
      <FontAwesomeIcon icon={faSubway} className="me-2" />
      <FontAwesomeIcon icon={faSuitcase} className="me-2" />
      <FontAwesomeIcon icon={faSuitcaseRolling} className="me-2" />
      <FontAwesomeIcon icon={faSun} className="me-2" />
      <FontAwesomeIcon icon={faSuperscript} className="me-2" />
      <FontAwesomeIcon icon={faSurprise} className="me-2" />
      <FontAwesomeIcon icon={faSwatchbook} className="me-2" />
      <FontAwesomeIcon icon={faSwimmer} className="me-2" />
      <FontAwesomeIcon icon={faSwimmingPool} className="me-2" />
      <FontAwesomeIcon icon={faSynagogue} className="me-2" />
      <FontAwesomeIcon icon={faSync} className="me-2" />
      <FontAwesomeIcon icon={faSyncAlt} className="me-2" />
      <FontAwesomeIcon icon={faSyringe} className="me-2" />
      <FontAwesomeIcon icon={faTable} className="me-2" />
      <FontAwesomeIcon icon={faTableTennis} className="me-2" />
      <FontAwesomeIcon icon={faTablet} className="me-2" />
      <FontAwesomeIcon icon={faTabletAlt} className="me-2" />
      <FontAwesomeIcon icon={faTablets} className="me-2" />
      <FontAwesomeIcon icon={faTachometerAlt} className="me-2" />
      <FontAwesomeIcon icon={faTag} className="me-2" />
      <FontAwesomeIcon icon={faTags} className="me-2" />
      <FontAwesomeIcon icon={faTape} className="me-2" />
      <FontAwesomeIcon icon={faTasks} className="me-2" />
      <FontAwesomeIcon icon={faTaxi} className="me-2" />
      <FontAwesomeIcon icon={faTeeth} className="me-2" />
      <FontAwesomeIcon icon={faTeethOpen} className="me-2" />
      <FontAwesomeIcon icon={faTemperatureHigh} className="me-2" />
      <FontAwesomeIcon icon={faTemperatureLow} className="me-2" />
      <FontAwesomeIcon icon={faTenge} className="me-2" />
      <FontAwesomeIcon icon={faTerminal} className="me-2" />
      <FontAwesomeIcon icon={faTextHeight} className="me-2" />
      <FontAwesomeIcon icon={faTextWidth} className="me-2" />
      <FontAwesomeIcon icon={faTh} className="me-2" />
      <FontAwesomeIcon icon={faThLarge} className="me-2" />
      <FontAwesomeIcon icon={faThList} className="me-2" />
      <FontAwesomeIcon icon={faTheaterMasks} className="me-2" />
      <FontAwesomeIcon icon={faThermometer} className="me-2" />
      <FontAwesomeIcon icon={faThermometerEmpty} className="me-2" />
      <FontAwesomeIcon icon={faThermometerFull} className="me-2" />
      <FontAwesomeIcon icon={faThermometerHalf} className="me-2" />
      <FontAwesomeIcon icon={faThermometerQuarter} className="me-2" />
      <FontAwesomeIcon icon={faThermometerThreeQuarters} className="me-2" />
      <FontAwesomeIcon icon={faThumbsDown} className="me-2" />
      <FontAwesomeIcon icon={faThumbsUp} className="me-2" />
      <FontAwesomeIcon icon={faThumbtack} className="me-2" />
      <FontAwesomeIcon icon={faTicketAlt} className="me-2" />
      <FontAwesomeIcon icon={faTimes} className="me-2" />
      <FontAwesomeIcon icon={faTimesCircle} className="me-2" />
      <FontAwesomeIcon icon={faTint} className="me-2" />
      <FontAwesomeIcon icon={faTintSlash} className="me-2" />
      <FontAwesomeIcon icon={faTired} className="me-2" />
      <FontAwesomeIcon icon={faToggleOff} className="me-2" />
      <FontAwesomeIcon icon={faToggleOn} className="me-2" />
      <FontAwesomeIcon icon={faToilet} className="me-2" />
      <FontAwesomeIcon icon={faToiletPaper} className="me-2" />
      <FontAwesomeIcon icon={faToiletPaperSlash} className="me-2" />
      <FontAwesomeIcon icon={faToolbox} className="me-2" />
      <FontAwesomeIcon icon={faTools} className="me-2" />
      <FontAwesomeIcon icon={faTooth} className="me-2" />
      <FontAwesomeIcon icon={faTorah} className="me-2" />
      <FontAwesomeIcon icon={faToriiGate} className="me-2" />
      <FontAwesomeIcon icon={faTractor} className="me-2" />
      <FontAwesomeIcon icon={faTrademark} className="me-2" />
      <FontAwesomeIcon icon={faTrafficLight} className="me-2" />
      <FontAwesomeIcon icon={faTrailer} className="me-2" />
      <FontAwesomeIcon icon={faTrain} className="me-2" />
      <FontAwesomeIcon icon={faTram} className="me-2" />
      <FontAwesomeIcon icon={faTransgender} className="me-2" />
      <FontAwesomeIcon icon={faTransgenderAlt} className="me-2" />
      <FontAwesomeIcon icon={faTrash} className="me-2" />
      <FontAwesomeIcon icon={faTrashAlt} className="me-2" />
      <FontAwesomeIcon icon={faTrashRestore} className="me-2" />
      <FontAwesomeIcon icon={faTrashRestoreAlt} className="me-2" />
      <FontAwesomeIcon icon={faTree} className="me-2" />
      <FontAwesomeIcon icon={faTrophy} className="me-2" />
      <FontAwesomeIcon icon={faTruck} className="me-2" />
      <FontAwesomeIcon icon={faTruckLoading} className="me-2" />
      <FontAwesomeIcon icon={faTruckMonster} className="me-2" />
      <FontAwesomeIcon icon={faTruckMoving} className="me-2" />
      <FontAwesomeIcon icon={faTruckPickup} className="me-2" />
      <FontAwesomeIcon icon={faTshirt} className="me-2" />
      <FontAwesomeIcon icon={faTty} className="me-2" />
      <FontAwesomeIcon icon={faTv} className="me-2" />
      <FontAwesomeIcon icon={faUmbrella} className="me-2" />
      <FontAwesomeIcon icon={faUmbrellaBeach} className="me-2" />
      <FontAwesomeIcon icon={faUnderline} className="me-2" />
      <FontAwesomeIcon icon={faUndo} className="me-2" />
      <FontAwesomeIcon icon={faUndoAlt} className="me-2" />
      <FontAwesomeIcon icon={faUniversalAccess} className="me-2" />
      <FontAwesomeIcon icon={faUniversity} className="me-2" />
      <FontAwesomeIcon icon={faUnlink} className="me-2" />
      <FontAwesomeIcon icon={faUnlock} className="me-2" />
      <FontAwesomeIcon icon={faUnlockAlt} className="me-2" />
      <FontAwesomeIcon icon={faUpload} className="me-2" />
      <FontAwesomeIcon icon={faUser} className="me-2" />
      <FontAwesomeIcon icon={faUserAlt} className="me-2" />
      <FontAwesomeIcon icon={faUserAltSlash} className="me-2" />
      <FontAwesomeIcon icon={faUserAstronaut} className="me-2" />
      <FontAwesomeIcon icon={faUserCheck} className="me-2" />
      <FontAwesomeIcon icon={faUserCircle} className="me-2" />
      <FontAwesomeIcon icon={faUserClock} className="me-2" />
      <FontAwesomeIcon icon={faUserCog} className="me-2" />
      <FontAwesomeIcon icon={faUserEdit} className="me-2" />
      <FontAwesomeIcon icon={faUserFriends} className="me-2" />
      <FontAwesomeIcon icon={faUserGraduate} className="me-2" />
      <FontAwesomeIcon icon={faUserInjured} className="me-2" />
      <FontAwesomeIcon icon={faUserLock} className="me-2" />
      <FontAwesomeIcon icon={faUserMd} className="me-2" />
      <FontAwesomeIcon icon={faUserMinus} className="me-2" />
      <FontAwesomeIcon icon={faUserNinja} className="me-2" />
      <FontAwesomeIcon icon={faUserNurse} className="me-2" />
      <FontAwesomeIcon icon={faUserPlus} className="me-2" />
      <FontAwesomeIcon icon={faUserSecret} className="me-2" />
      <FontAwesomeIcon icon={faUserShield} className="me-2" />
      <FontAwesomeIcon icon={faUserSlash} className="me-2" />
      <FontAwesomeIcon icon={faUserTag} className="me-2" />
      <FontAwesomeIcon icon={faUserTie} className="me-2" />
      <FontAwesomeIcon icon={faUserTimes} className="me-2" />
      <FontAwesomeIcon icon={faUsers} className="me-2" />
      <FontAwesomeIcon icon={faUsersCog} className="me-2" />
      <FontAwesomeIcon icon={faUsersSlash} className="me-2" />
      <FontAwesomeIcon icon={faUtensilSpoon} className="me-2" />
      <FontAwesomeIcon icon={faUtensils} className="me-2" />
      <FontAwesomeIcon icon={faVectorSquare} className="me-2" />
      <FontAwesomeIcon icon={faVenus} className="me-2" />
      <FontAwesomeIcon icon={faVenusDouble} className="me-2" />
      <FontAwesomeIcon icon={faVenusMars} className="me-2" />
      <FontAwesomeIcon icon={faVest} className="me-2" />
      <FontAwesomeIcon icon={faVestPatches} className="me-2" />
      <FontAwesomeIcon icon={faVial} className="me-2" />
      <FontAwesomeIcon icon={faVials} className="me-2" />
      <FontAwesomeIcon icon={faVideo} className="me-2" />
      <FontAwesomeIcon icon={faVideoSlash} className="me-2" />
      <FontAwesomeIcon icon={faVihara} className="me-2" />
      <FontAwesomeIcon icon={faVirus} className="me-2" />
      <FontAwesomeIcon icon={faVirusSlash} className="me-2" />
      <FontAwesomeIcon icon={faViruses} className="me-2" />
      <FontAwesomeIcon icon={faVoicemail} className="me-2" />
      <FontAwesomeIcon icon={faVolleyballBall} className="me-2" />
      <FontAwesomeIcon icon={faVolumeDown} className="me-2" />
      <FontAwesomeIcon icon={faVolumeMute} className="me-2" />
      <FontAwesomeIcon icon={faVolumeOff} className="me-2" />
      <FontAwesomeIcon icon={faVolumeUp} className="me-2" />
      <FontAwesomeIcon icon={faVoteYea} className="me-2" />
      <FontAwesomeIcon icon={faVrCardboard} className="me-2" />
      <FontAwesomeIcon icon={faWalking} className="me-2" />
      <FontAwesomeIcon icon={faWallet} className="me-2" />
      <FontAwesomeIcon icon={faWarehouse} className="me-2" />
      <FontAwesomeIcon icon={faWater} className="me-2" />
      <FontAwesomeIcon icon={faWaveSquare} className="me-2" />
      <FontAwesomeIcon icon={faWeight} className="me-2" />
      <FontAwesomeIcon icon={faWeightHanging} className="me-2" />
      <FontAwesomeIcon icon={faWheelchair} className="me-2" />
      <FontAwesomeIcon icon={faWifi} className="me-2" />
      <FontAwesomeIcon icon={faWind} className="me-2" />
      <FontAwesomeIcon icon={faWindowClose} className="me-2" />
      <FontAwesomeIcon icon={faWindowMaximize} className="me-2" />
      <FontAwesomeIcon icon={faWindowMinimize} className="me-2" />
      <FontAwesomeIcon icon={faWindowRestore} className="me-2" />
      <FontAwesomeIcon icon={faWineBottle} className="me-2" />
      <FontAwesomeIcon icon={faWineGlass} className="me-2" />
      <FontAwesomeIcon icon={faWineGlassAlt} className="me-2" />
      <FontAwesomeIcon icon={faWonSign} className="me-2" />
      <FontAwesomeIcon icon={faWrench} className="me-2" />
      <FontAwesomeIcon icon={faXRay} className="me-2" />
      <FontAwesomeIcon icon={faYenSign} className="me-2" />
      <FontAwesomeIcon icon={faYinYang} className="me-2" />
    </Container>
  );
};

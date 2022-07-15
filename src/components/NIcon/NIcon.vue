<template>
  <div class="n-icon">
    <NIconHome v-if="icon === 'home'" />
    <!-- <NIconBag v-else-if="icon === 'bag'" />
    <NIconTruck v-else-if="icon === 'truck'" />
    <NIconScan v-else-if="icon === 'scan'" />
    <NIconCategory v-else-if="icon === 'category'" />
    <NIconUsers v-else-if="icon === 'users'" />
    <NIconChart v-else-if="icon === 'chart'" />
    <NIconSetting v-else-if="icon === 'setting'" />
    <NIconSearch v-else-if="icon === 'search'" />
    <NIconNotification v-else-if="icon === 'notification'" />
    <NIconLogout v-else-if="icon === 'logout'" />
    <NIconMenu v-else-if="icon === 'menu'" />
    <NIconClose v-else-if="icon === 'close'" />
    <NIconDownload v-else-if="icon === 'download'" /> -->
    <NIconDelete v-else-if="icon === 'delete'" />
    <!-- <NIconMore v-else-if="icon === 'more'" />
    <NIconChat v-else-if="icon === 'chat'" />
    <NIconAdd v-else-if="icon === 'add'" />
    <NIconCalendar v-else-if="icon === 'calendar'" />
    <NIconDone v-else-if="icon === 'done'" />
    <NIconEdit v-else-if="icon === 'edit'" />
    <NIconFail v-else-if="icon === 'fail'" />
    <NIconFilter v-else-if="icon === 'filter'" />
    <NIconHide v-else-if="icon === 'hide'" />
    <NIconImage v-else-if="icon === 'image'" />
    <NIconLocation v-else-if="icon === 'location'" />
    <NIconMoreCircle v-else-if="icon === 'more-circle'" />
    <NIconMoreSquare v-else-if="icon === 'more-square'" />
    <NIconArrowDown v-else-if="icon === 'arrow-down'" />
    <NIconArrowDown2 v-else-if="icon === 'arrow-down-2'" />
    <NIconArrowDown3 v-else-if="icon === 'arrow-down-3'" />
    <NIconArrowDownCircle v-else-if="icon === 'arrow-down-circle'" />
    <NIconArrowDownSquare v-else-if="icon === 'arrow-down-square'" />
    <NIconArrowRight v-else-if="icon === 'arrow-right'" />
    <NIconArrowRight2 v-else-if="icon === 'arrow-right-2'" />
    <NIconArrowRight3 v-else-if="icon === 'arrow-right-3'" />
    <NIconArrowRightCircle v-else-if="icon === 'arrow-right-circle'" />
    <NIconArrowRightSquare v-else-if="icon === 'arrow-right-square'" />
    <NIconArrowUp v-else-if="icon === 'arrow-up'" />
    <NIconArrowUp2 v-else-if="icon === 'arrow-up-2'" />
    <NIconArrowUp3 v-else-if="icon === 'arrow-up-3'" />
    <NIconArrowUpCircle v-else-if="icon === 'arrow-up-circle'" />
    <NIconArrowUpSquare v-else-if="icon === 'arrow-up-square'" />
    <NIconArrowLeft v-else-if="icon === 'arrow-left'" />
    <NIconArrowLeft2 v-else-if="icon === 'arrow-left-2'" />
    <NIconArrowLeft3 v-else-if="icon === 'arrow-left-3'" />
    <NIconArrowLeftCircle v-else-if="icon === 'arrow-left-circle'" />
    <NIconArrowLeftSquare v-else-if="icon === 'arrow-left-square'" />
    <NIconShow v-else-if="icon === 'show'" />
    <NIconSwap v-else-if="icon === 'swap'" />
    <NIconTick v-else-if="icon === 'tick'" />
    <NIconUpload v-else-if="icon === 'upload'" />
    <NIconPaper v-else-if="icon === 'paper'" />
    <NIconMoney v-else-if="icon === 'money'" />
    <NIconFolder v-else-if="icon === 'folder'" />
    <NIconWallet v-else-if="icon === 'wallet'" />
    <NIconGraph v-else-if="icon === 'graph'" />
    <NIconBookmark v-else-if="icon === 'bookmark'" />
    <NIconHeart v-else-if="icon === 'heart'" />
    <NIconPaperNegative v-else-if="icon === 'paper-negative'" />
    <NIconPaperFail v-else-if="icon === 'paper-fail'" />
    <NIconPaperDownload v-else-if="icon === 'paper-download'" />
    <NIconPaperUpload v-else-if="icon === 'paper-upload'" />
    <NIconSend v-else-if="icon === 'send'" />
    <NIconPassword v-else-if="icon === 'password'" />
    <NIconWork v-else-if="icon === 'work'" />
    <NIconActivity v-else-if="icon === 'activity'" />
    <NIconMessage v-else-if="icon === 'message'" />
    <NIconVideo v-else-if="icon === 'video'" />
    <NIconPlus v-else-if="icon === 'plus'" />
    <NIconGame v-else-if="icon === 'game'" />
    <NIconBag3 v-else-if="icon === 'bag-3'" />
    <NIconTicketStar v-else-if="icon === 'ticket-star'" />
    <NIconDiscount v-else-if="icon === 'discount'" />
    <NIconBuy v-else-if="icon === 'buy'" />
    <NIconInfoCircle v-else-if="icon === 'info-circle'" />
    <NIconInfoSquare v-else-if="icon === 'info-square'" />
    <NIconDanger v-else-if="icon === 'danger'" />
    <NIconDiscovery v-else-if="icon === 'discovery'" />
    <NIconDocument v-else-if="icon === 'document'" />
    <NIconTimeSquare v-else-if="icon === 'time-square'" />
    <NIconTimeCircle v-else-if="icon === 'time-circle'" />
    <NIconVolumeUp v-else-if="icon === 'volume-up'" />
    <NIconVolumeDown v-else-if="icon === 'volume-down'" />
    <NIconVolumeOff v-else-if="icon === 'volume-off'" />
    <NIconStar v-else-if="icon === 'star'" />
    <NIconTicket v-else-if="icon === 'ticket'" />
    <NIconCamera v-else-if="icon === 'camera'" />
    <NIconProfile v-else-if="icon === 'profile'" />
    <NIconAddUser v-else-if="icon === 'add-user'" />
    <NIconUsers2 v-else-if="icon === 'users-2'" />
    <NIconLogin v-else-if="icon === 'login'" />
    <NIconVoice v-else-if="icon === 'voice'" />
    <NIconVoice3 v-else-if="icon === 'voice-3'" />
    <NIconEditSquare v-else-if="icon === 'edit-square'" />
    <NIconPlay v-else-if="icon === 'play'" />
    <NIconFilter3 v-else-if="icon === 'filter-3'" />
    <NIconImage3 v-else-if="icon === 'image-3'" />
    <NIconCall v-else-if="icon === 'call'" />
    <NIconCalling v-else-if="icon === 'calling'" />
    <NIconCallMissed v-else-if="icon === 'call-missed'" />
    <NIconCallSilent v-else-if="icon === 'call-silent'" />
    <NIconLock v-else-if="icon === 'lock'" />
    <NIconUnlock v-else-if="icon === 'unlock'" />
    <NIconWhatsapp v-else-if="icon === 'whatsapp'" />
    <NIconLine v-else-if="icon === 'line'" />
    <NIconTelegram v-else-if="icon === 'telegram'" />
    <NIconFacebook v-else-if="icon === 'facebook'" />
    <NIconDoubleCheckmark v-else-if="icon === 'double-checkmark'" />
    <NIconCheckmark v-else-if="icon === 'checkmark'" /> -->
  </div>
</template>

<script>
import NIconHome from "@/components/NIcon/NIconHome.vue";
// import NIconBag from "@/components/icon/Bag";
// import NIconTruck from "@/components/icon/Truck";
// import NIconScan from "@/components/icon/Scan";
// import NIconCategory from "@/components/icon/Category";
// import NIconUsers from "@/components/icon/Users";
// import NIconChart from "@/components/icon/Chart";
// import NIconSetting from "@/components/icon/Setting";
// import NIconSearch from "@/components/icon/Search";
// import NIconNotification from "@/components/icon/Notification";
// import NIconLogout from "@/components/icon/Logout";
// import NIconMenu from "@/components/icon/Menu";
// import NIconClose from "@/components/icon/Close";
// import NIconDownload from "@/components/icon/Download";
import NIconDelete from "@/components/NIcon/NIconDelete.vue";
// import NIconMore from "@/components/icon/More";
// import NIconChat from "@/components/icon/Chat";
// import NIconAdd from "@/components/icon/Add";
// import NIconCalendar from "@/components/icon/Calendar";
// import NIconDone from "@/components/icon/Done";
// import NIconEdit from "@/components/icon/Edit";
// import NIconFail from "@/components/icon/Fail";
// import NIconFilter from "@/components/icon/Filter";
// import NIconHide from "@/components/icon/Hide";
// import NIconImage from "@/components/icon/Image";
// import NIconLocation from "@/components/icon/Location";
// import NIconMoreCircle from "@/components/icon/MoreCircle";
// import NIconMoreSquare from "@/components/icon/MoreSquare";
// import NIconArrowDown from "@/components/icon/ArrowDown";
// import NIconArrowDown2 from "@/components/icon/ArrowDown2";
// import NIconArrowDown3 from "@/components/icon/ArrowDown3";
// import NIconArrowDownCircle from "@/components/icon/ArrowDownCircle";
// import NIconArrowDownSquare from "@/components/icon/ArrowDownSquare";
// import NIconArrowRight from "@/components/icon/ArrowRight";
// import NIconArrowRight2 from "@/components/icon/ArrowRight2";
// import NIconArrowRight3 from "@/components/icon/ArrowRight3";
// import NIconArrowRightCircle from "@/components/icon/ArrowRightCircle";
// import NIconArrowRightSquare from "@/components/icon/ArrowRightSquare";
// import NIconArrowUp from "@/components/icon/ArrowUp";
// import NIconArrowUp2 from "@/components/icon/ArrowUp2";
// import NIconArrowUp3 from "@/components/icon/ArrowUp3";
// import NIconArrowUpCircle from "@/components/icon/ArrowUpCircle";
// import NIconArrowUpSquare from "@/components/icon/ArrowUpSquare";
// import NIconArrowLeft from "@/components/icon/ArrowLeft";
// import NIconArrowLeft2 from "@/components/icon/ArrowLeft2";
// import NIconArrowLeft3 from "@/components/icon/ArrowLeft3";
// import NIconArrowLeftCircle from "@/components/icon/ArrowLeftCircle";
// import NIconArrowLeftSquare from "@/components/icon/ArrowLeftSquare";
// import NIconShow from "@/components/icon/Show";
// import NIconSwap from "@/components/icon/Swap";
// import NIconTick from "@/components/icon/Tick";
// import NIconUpload from "@/components/icon/Upload";
// import NIconPaper from "@/components/icon/Paper";
// import NIconMoney from "@/components/icon/Money";
// import NIconFolder from "@/components/icon/Folder";
// import NIconWallet from "@/components/icon/Wallet";
// import NIconGraph from "@/components/icon/Graph";
// import NIconBookmark from "@/components/icon/Bookmark";
// import NIconHeart from "@/components/icon/Heart";
// import NIconPaperNegative from "@/components/icon/PaperNegative";
// import NIconPaperFail from "@/components/icon/PaperFail";
// import NIconPaperDownload from "@/components/icon/PaperDownload";
// import NIconPaperUpload from "@/components/icon/PaperUpload";
// import NIconSend from "@/components/icon/Send";
// import NIconPassword from "@/components/icon/Password";
// import NIconWork from "@/components/icon/Work";
// import NIconActivity from "@/components/icon/Activity";
// import NIconMessage from "@/components/icon/Message";
// import NIconVideo from "@/components/icon/Video";
// import NIconPlus from "@/components/icon/Plus";
// import NIconGame from "@/components/icon/Game";
// import NIconBag3 from "@/components/icon/Bag3";
// import NIconTicketStar from "@/components/icon/TicketStar";
// import NIconDiscount from "@/components/icon/Discount";
// import NIconBuy from "@/components/icon/Buy";
// import NIconInfoCircle from "@/components/icon/InfoCircle";
// import NIconInfoSquare from "@/components/icon/InfoSquare";
// import NIconDanger from "@/components/icon/Danger";
// import NIconDiscovery from "@/components/icon/Discovery";
// import NIconDocument from "@/components/icon/Document";
// import NIconTimeSquare from "@/components/icon/TimeSquare";
// import NIconTimeCircle from "@/components/icon/TimeCircle";
// import NIconVolumeUp from "@/components/icon/VolumeUp";
// import NIconVolumeDown from "@/components/icon/VolumeDown";
// import NIconVolumeOff from "@/components/icon/VolumeOff";
// import NIconStar from "@/components/icon/Star";
// import NIconTicket from "@/components/icon/Ticket";
// import NIconCamera from "@/components/icon/Camera";
// import NIconProfile from "@/components/icon/Profile";
// import NIconAddUser from "@/components/icon/AddUser";
// import NIconUsers2 from "@/components/icon/Users2";
// import NIconLogin from "@/components/icon/Login";
// import NIconVoice from "@/components/icon/Voice";
// import NIconVoice3 from "@/components/icon/Voice3";
// import NIconEditSquare from "@/components/icon/EditSquare";
// import NIconPlay from "@/components/icon/Play";
// import NIconFilter3 from "@/components/icon/Filter3";
// import NIconImage3 from "@/components/icon/Image3";
// import NIconCall from "@/components/icon/Call";
// import NIconCalling from "@/components/icon/Calling";
// import NIconCallMissed from "@/components/icon/CallMissed";
// import NIconCallSilent from "@/components/icon/CallSilent";
// import NIconLock from "@/components/icon/Lock";
// import NIconUnlock from "@/components/icon/Unlock";
// import NIconWhatsapp from "@/components/icon/Whatsapp";
// import NIconLine from "@/components/icon/Line";
// import NIconTelegram from "@/components/icon/Telegram";
// import NIconFacebook from "@/components/icon/Facebook";
// import NIconDoubleCheckmark from "@/components/icon/DoubleCheckmark";
// import NIconCheckmark from "@/components/icon/Checkmark";

export default {
  name: "NIcon",
  components: {
    NIconHome,
    // NIconBag,
    // NIconTruck,
    // NIconScan,
    // NIconCategory,
    // NIconUsers,
    // NIconChart,
    // NIconSetting,
    // NIconSearch,
    // NIconNotification,
    // NIconLogout,
    // NIconMenu,
    // NIconClose,
    // NIconDownload,
    NIconDelete,
    // NIconMore,
    // NIconChat,
    // NIconAdd,
    // NIconCalendar,
    // NIconDone,
    // NIconEdit,
    // NIconFail,
    // NIconFilter,
    // NIconHide,
    // NIconImage,
    // NIconLocation,
    // NIconMoreCircle,
    // NIconMoreSquare,
    // NIconArrowDown,
    // NIconArrowDown2,
    // NIconArrowDown3,
    // NIconArrowDownCircle,
    // NIconArrowDownSquare,
    // NIconArrowRight,
    // NIconArrowRight2,
    // NIconArrowRight3,
    // NIconArrowRightCircle,
    // NIconArrowRightSquare,
    // NIconArrowUp,
    // NIconArrowUp2,
    // NIconArrowUp3,
    // NIconArrowUpCircle,
    // NIconArrowUpSquare,
    // NIconArrowLeft,
    // NIconArrowLeft2,
    // NIconArrowLeft3,
    // NIconArrowLeftCircle,
    // NIconArrowLeftSquare,
    // NIconShow,
    // NIconSwap,
    // NIconTick,
    // NIconUpload,
    // NIconPaper,
    // NIconMoney,
    // NIconFolder,
    // NIconWallet,
    // NIconGraph,
    // NIconBookmark,
    // NIconHeart,
    // NIconPaperNegative,
    // NIconPaperFail,
    // NIconPaperDownload,
    // NIconPaperUpload,
    // NIconSend,
    // NIconPassword,
    // NIconWork,
    // NIconActivity,
    // NIconMessage,
    // NIconVideo,
    // NIconPlus,
    // NIconGame,
    // NIconBag3,
    // NIconTicketStar,
    // NIconDiscount,
    // NIconBuy,
    // NIconInfoCircle,
    // NIconInfoSquare,
    // NIconDanger,
    // NIconDiscovery,
    // NIconDocument,
    // NIconTimeSquare,
    // NIconTimeCircle,
    // NIconVolumeUp,
    // NIconVolumeDown,
    // NIconVolumeOff,
    // NIconStar,
    // NIconTicket,
    // NIconCamera,
    // NIconProfile,
    // NIconAddUser,
    // NIconUsers2,
    // NIconLogin,
    // NIconVoice,
    // NIconVoice3,
    // NIconEditSquare,
    // NIconPlay,
    // NIconFilter3,
    // NIconImage3,
    // NIconCall,
    // NIconCalling,
    // NIconCallMissed,
    // NIconCallSilent,
    // NIconLock,
    // NIconUnlock,
    // NIconWhatsapp,
    // NIconLine,
    // NIconTelegram,
    // NIconFacebook,
    // NIconDoubleCheckmark,
    // NIconCheckmark,
  },
  props: {
    icon: {
      type: String,
      default: "home",
    },
  },
};
</script>

<style scoped>
/* Todo:
Translate Tailwind with and height for better size proportion
on responsive
*/
.n-icon {
  @apply inline-flex;
  @apply items-center;
  @apply justify-center;

  svg {
    @apply w-full;
    @aookt h-full;
  }

  /* Size */
  @apply w-6;
  @apply h-6;

  &.xs {
    @apply w-4;
    @apply h-4;
  }

  &.sm {
    @apply w-5;
    @apply h-5;
  }

  &.md {
    @apply w-6;
    @apply h-6;
  }

  &.lg {
    @apply w-7;
    @apply h-7;
  }

  &.xl {
    @apply w-9;
    @apply h-9;
  }

  &.xxl {
    @apply w-12;
    @apply h-12;
  }
}
</style>

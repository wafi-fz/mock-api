import { DsStandardResponse } from '@/helpers/ds-standard-response';
import DsWrapResponseInterceptor from '@/interceptors/ds-wrap-response.interceptor';
import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { MonitoringDatatableRequestDto } from './dtos/monitoring-datatable-request.dto';

@ApiTags('Monitoring Media Social')
@UseInterceptors(DsWrapResponseInterceptor)
@Controller('api/monitoring-media-social')
export default class MonitoringMediaSocialController {
  @Post('datatable/twitter')
  @ApiBody({
    type: MonitoringDatatableRequestDto,
    description: 'Monitoring Datatable Request Body',
    examples: {
      monitoringDatatableExample: {
        summary: 'Monitoring Datatable Request Body Example',
        value: {
          monitoringId: '44cd0c8a-dfd6-4845-9723-8f5b92da9260',
          accountName: '',
          startDate: '',
          endDate: '',
          description: '',
          page: 1,
          limit: 10,
        },
      },
    },
  })
  async datatableTwitter(
    @Body() body: MonitoringDatatableRequestDto,
  ): Promise<any> {
    const data = [
      {
        id: 1965001437437645239,
        id_str: '1965001437437645239',
        conversation_id: '1965001437437645239',
        date: '2025-09-08',
        time: '17:37',
        timezone: '',
        user_id: 1162671550694416384,
        user_id_str: '1162671550694416384',
        screen_name: 'HaboDafyn',
        time_update: 0,
        tweet:
          'This can be your sub yet  you are also in the comment section laughing and asking who 😭😭😭😭',
        place: '',
        replies_count: 4,
        likes_count: 7,
        retweets_count: 0,
        name: 'Habo Dafyn Brooke',
        link: 'https://twitter.com/HaboDafyn/status/1965001437437645239',
        mentions: '',
        hashtags: '',
        cashtags: '',
        urls: '',
        photos: 'img',
        quote_url: '',
        video: 0,
        geo: '',
        near: '',
        source: '',
        translate: '',
        trans_src: '',
        trans_dest: '',
        possibly_sensitive: 0,
        context: '',
        view_count: 933,
        type: 0,
        ref_tweet_type: 'quoted',
        ref_tweet_id: '1964932552193720629',
        ref_tweet_username: '',
        status: 0,
        follower_count: 4157,
        user_created: '2019-08-17 10:24:59',
        days_account: 2222,
        age_account: '> 1 Tahun',
      },
    ];

    const response = DsStandardResponse(200, 'ok', data, data.length);

    return response;
  }

  @Post('datatable/tiktok')
  @ApiBody({
    type: MonitoringDatatableRequestDto,
    description: 'Monitoring Datatable Request Body',
    examples: {
      monitoringDatatableExample: {
        summary: 'Monitoring Datatable Request Body Example',
        value: {
          monitoringId: '44cd0c8a-dfd6-4845-9723-8f5b92da9260',
          accountName: '',
          startDate: '',
          endDate: '',
          description: '',
          page: 1,
          limit: 10,
        },
      },
    },
  })
  async datatableTiktok(
    @Body() body: MonitoringDatatableRequestDto,
  ): Promise<any> {
    const data = [
      {
        id: '7547952779336224056',
        collected: false,
        create_time: 1757394717,
        desc: 'Sri Mulyani Indrawati resmi pamit sebagai bagian dari Kementerian Keuangan (Kemenkeu). Usai acara serah terima jabatan (Sertijab), Sri Mulyani dilepas ribuan pegawai Kemenkeu dengan lantunan lagu Bahasa Kalbu yang dipopulerkan Titi Dj. Dalam pantauan JawaPos.com, Sri Mulyani tampak haru dan menitikan air mata saat lagu tersebut dilantunkan ribuan para pegawainya. Baca selengkapnya di www.jawapos.com',
        digged: false,
        duet_enabled: true,
        for_friend: false,
        is_ad: false,
        item_comment_status: 0,
        item_mute: false,
        official_item: false,
        original_item: false,
        privilage_item: null,
        secret: false,
        share_enabled: true,
        show_not_pass: false,
        stitch_enabled: true,
        vl_1: false,
        monitoring_id: '56829643-d3f2-4432-9354-76a7b3f8457c',
        author: {
          id: '6751266098303288321',
          tiktok_id: '7547952779336224056',
          avatar_larger:
            'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/488cc1b566568bbdb32461d26fdf686a~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=11f7a296&x-expires=1757602800&x-signature=Amia5JJ6uwfWs0xQn9KqbbuhmV8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2',
          avatar_medium:
            'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/488cc1b566568bbdb32461d26fdf686a~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=56bfe915&x-expires=1757602800&x-signature=GC3T%2BnQNhOXFJo5nowPRJYFssrU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2',
          avatar_thumb:
            'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/488cc1b566568bbdb32461d26fdf686a~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=8c5947ec&x-expires=1757602800&x-signature=KJUZf6R0AKNQLahSCV5NRhkD2BY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2',
          comment_setting: 0,
          download_setting: 0,
          duet_setting: 0,
          ftc: false,
          nickname: 'Jawa Pos Official',
          open_avorite: false,
          private_account: false,
          relation: 0,
          sec_uid:
            'MS4wLjABAAAAr01_Xad9NklYHiCk5dNHMogx-GuBuUbjY3ziF3ENDNtlLounNt2n6VLivtPsQAKX',
          secret: false,
          signature:
            'Akun resmi Jawa Pos \n#bacajawapos untuk update berita akurat terverifikasi',
          stitch_setting: 0,
          unique_id: 'jawaposofficial',
          verified: false,
        },
        author_stats: {
          tiktok_id: '7547952779336224056',
          digg_count: 1552,
          follower_count: 242300,
          following_count: 10,
          heart: 12800000,
          heart_count: 12800000,
          video_count: 1276,
        },
        stats: {
          tiktok_id: '7547952779336224056',
          collect_count: 14000,
          comment_count: 9642,
          digg_count: 325700,
          play_count: 7700000,
          share_count: 23700,
        },
        video: {
          id: '7547952779336224056',
          tiktok_id: '7547952779336224056',
          bitrate: 1029838,
          cover:
            'https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oYFrqi2EC8yIRuLGHeQDR2AkrtAemD0fytfIxG~tplv-tiktokx-origin.image?dr=10395&x-expires=1758067200&x-signature=efnNFwX3bIZaAd5dwCd75P5hJUw%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=no1a',
          download_addr:
            'https://v16-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/o4rfDeAfeAQwoy1kgGGir3EmtIFkLRv8C2bIJ0/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2286&bt=1143&cs=0&ds=3&ft=I~da4o1xD12Nv6lc0WIxRSk_HlBF-UjNS8opiX&mime_type=video_mp4&qs=0&rc=NmVoOTppPDg8ZjM0ZWZpOEBpamllZHc5cmp1NTMzNzczM0BeXmIuLjA0NWIxYWExLWAyYSM2cmstMmRjYHNhLS1kMTZzcw%3D%3D&btag=e00090000&expire=1757602928&l=20250909230028B4AB2FF312381218F576&ply_type=2&policy=2&signature=a30161ac7aa5a713da4030eabdc554c1&tk=tt_chain_token',
          duration: 99,
          dynamic_cover:
            'https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oU2fGifCflrIRtn7FAgd90yeDrmAGLgGN8kEM2~tplv-tiktokx-origin.image?dr=14575&x-expires=1757602800&x-signature=RnyRW6OXlgxPirKPsQm2JvwwaQA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2',
          encode_user_tag: '',
          encoded_type: 'normal',
          format: 'mp4',
          height: 1024,
          width: 576,
          original_cover: null,
          play_addr:
            'https://v16-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/oUk8fMtG9gCrRbrFIi2AWyG0LDeAAEww7Rzfyf/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2010&bt=1005&cs=0&ds=6&ft=I~da4o1xD12Nv6lc0WIxRSk_HlBF-UjNS8opiX&mime_type=video_mp4&qs=0&rc=ZjxmNTU3ZztkOTlnZzZoZUBpamllZHc5cmp1NTMzNzczM0BjL2BfLWEyNl8xYjEvNDEtYSM2cmstMmRjYHNhLS1kMTZzcw%3D%3D&btag=e00090000&expire=1757602928&l=20250909230028B4AB2FF312381218F576&ply_type=2&policy=2&signature=33835c7cbce87b0176c1d363f3bc41f0&tk=tt_chain_token',
          ratio: '540p',
          reflow_cover: '',
          video_quality: 'normal',
        },
      },
    ];

    const response = DsStandardResponse(200, 'ok', data, data.length);

    return response;
  }

  @Post('datatable/instagram')
  @ApiBody({
    type: MonitoringDatatableRequestDto,
    description: 'Monitoring Datatable Request Body',
    examples: {
      monitoringDatatableExample: {
        summary: 'Monitoring Datatable Request Body Example',
        value: {
          monitoringId: '44cd0c8a-dfd6-4845-9723-8f5b92da9260',
          accountName: '',
          startDate: '',
          endDate: '',
          description: '',
          page: 1,
          limit: 10,
        },
      },
    },
  })
  async datatableInstagram(
    @Body() body: MonitoringDatatableRequestDto,
  ): Promise<any> {
    const data = [
      {
        id: 'DLDWGlsyir2',
        url: 'https://www.instagram.com/p/DLDWGlsyir2/',
        content:
          'Sebagai generasi penerus bangsa mari kita jaga kelestarian alam negeri ini dengan terus menyuarakan ketidakadilan terhadap pengrusakan alam nusantara ini \n\nProgresif Kreatif Kolaborarif✊🏼👍🏼\nBahagia HMI\nJayalah Kohati\nYakusa💚🖤\n\n#HMI#LafranPane#UII#yogyakarta#kahmi#jateng#hits#fyp#likeforlikes#follow#info#dailynews#diy#instagood#instahits#yakusa#mahasiswa#pergerakan#justice#saverajaampat#indonesia#savepalestine#akademisi',
        publishDate: '19 Jun 2025 01:30',
        likeCount: 1,
        shareCount: null,
        commentCount: 0,
        profileId: '2339588716',
        createdDate: '18 Jun 2025 18:39',
        monitoringId: '6006de91-5f02-42ef-b699-3bb26bb4dcef',
        username: 'hmifiai.fkuii',
        fullname: 'HMI Komisariat Lafran Pane UII (FIAI - FK)',
      },
    ];

    const response = DsStandardResponse(200, 'ok', data, data.length);

    return response;
  }

  @Post('datatable/facebook')
  @ApiBody({
    type: MonitoringDatatableRequestDto,
    description: 'Monitoring Datatable Request Body',
    examples: {
      monitoringDatatableExample: {
        summary: 'Monitoring Datatable Request Body Example',
        value: {
          monitoringId: '44cd0c8a-dfd6-4845-9723-8f5b92da9260',
          accountName: '',
          startDate: '',
          endDate: '',
          description: '',
          page: 1,
          limit: 10,
        },
      },
    },
  })
  async datatableFacebook(
    @Body() body: MonitoringDatatableRequestDto,
  ): Promise<any> {
    const data = [
      {
        id: 122218648142251503,
        publishedDate: '18 Jun 2025 17:39:58',
        profileUrl: null,
        url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02zPkygCBH91qoeXBwr4P6ApZ5NrsiF3vgrK8t3cMaaFkXAsXTmBNT4u8i5j3Q3VEMl&id=61557545091807',
        name: 'Bagusbumi',
        text: 'Bajingan2 rakus perampok rakyat',
        hashtag: '',
        likesCount: 0,
        sharesCount: 0,
        viewsCount: 0,
        commentCount: 0,
        followingCount: 0,
        followerCount: 0,
        friendCount: 0,
        imageUrl: null,
        monitoringId: '2fbdb30c-644a-4342-b2ac-b2e743d992bd',
        profileId: null,
        createdDate: '2025-01-18 17:41:29.000',
      },
    ];

    const response = DsStandardResponse(200, 'ok', data, data.length);

    return response;
  }

  @Post('datatable/youtube')
  @ApiBody({
    type: MonitoringDatatableRequestDto,
    description: 'Monitoring Datatable Request Body',
    examples: {
      monitoringDatatableExample: {
        summary: 'Monitoring Datatable Request Body Example',
        value: {
          monitoringId: '44cd0c8a-dfd6-4845-9723-8f5b92da9260',
          accountName: '',
          startDate: '',
          endDate: '',
          description: '',
          page: 1,
          limit: 10,
        },
      },
    },
  })
  async datatableYoutube(
    @Body() body: MonitoringDatatableRequestDto,
  ): Promise<any> {
    const data = [
      {
        kind: null,
        etag: '_akpso-hSwxpLQsHeYCtmuTQDNw',
        id: 'TEIkacmLXXI',
        kindId: 'youtube#video',
        channelId: 'UCqLsfkQSM0yfyGvONAGWd3Q',
        playlistId: null,
        publishedDate: '',
        title: 'Lodho Ayam Legendaris di Lereng Gunung Kelud #Beritasatu',
        description:
          'Gunung Kelud di Kediri, Jawa Timur, bukan hanya destinasi wisata alam yang memukau dengan panorama magisnya. Di sana ada surga bagi pencinta kuliner tradisional. Di kaki gunung ini, berdiri sebuah warung legendaris yang menyajikan lodho ayam khas Kediri—menu olahan ayam kampung yang dimasak dengan bumbu rempah khas dan santan kental.\n\nCita rasa autentik dan suasana pegunungan yang sejuk menjadikan pengalaman bersantap di warung ini, jadi pengalaman tak terlupakan bagi para wisatawan.\n\n#Beritasatu\n#SaatnyaIndonesiaBerbenah\n#WajahBaruBuniverse\n#warunglodho #khaskediri #masakankediri #kulinernusantara\n\nPastikan kamu subscribe dan aktifkan juga tombol lonceng untuk mendapatkan notifikasi video terbaru dari BeritaSatu.\n\n---------------------------------------------------------------------------------------------------------------------------\nKunjungi juga social media channel kami :\n\nOfficial Website: https://www.beritasatu.com\nWhatsapp : https://whatsapp.com/channel/0029Vb2lVmJJJhzSSEkLN30K\nTwitter       : https://twitter.com/Beritasatu\nFacebook : https://www.facebook.com/beritasatu/\nInstagram : https://www.instagram.com/beritasatu/\nTiktok        : https://www.tiktok.com/@beritasatuofficial\n\n__________________________________________________________________________________',
        imageUrl: 'https://i.ytimg.com/vi/TEIkacmLXXI/mqdefault.jpg',
        channelName: 'BeritaSatu',
        liveBroadcastContent: null,
        publishedTime: '2025-07-21 13:15:03',
        monitoring_id: null,
        url: 'https://www.youtube.com/watch?v=TEIkacmLXXI',
        viewCount: 93,
        likeCount: 7,
        favoriteCount: 0,
        commentCount: 0,
      },
    ];

    const response = DsStandardResponse(200, 'ok', data, data.length);

    return response;
  }

  @Post('datatable/google')
  @ApiBody({
    type: MonitoringDatatableRequestDto,
    description: 'Monitoring Datatable Request Body',
    examples: {
      monitoringDatatableExample: {
        summary: 'Monitoring Datatable Request Body Example',
        value: {
          monitoringId: '44cd0c8a-dfd6-4845-9723-8f5b92da9260',
          accountName: '',
          startDate: '',
          endDate: '',
          description: '',
          page: 1,
          limit: 10,
        },
      },
    },
  })
  async datatableGoogle(
    @Body() body: MonitoringDatatableRequestDto,
  ): Promise<any> {
    const data = [
      {
        id: '2b5b3782-aea8-4594-b905-649e0cee7257',
        monitoringId: '2cb95b06-6ec5-446d-aa4c-9471e31f32aa',
        source: 'www.greenpeace.org',
        link: 'https://www.greenpeace.org/indonesia/siaran-pers-2/63138/melindungi-surga-terakhir-investigasi-greenpeace-ungkap-rencana-besar-industri-nikel-di-raja-ampat/',
        title:
          'Melindungi Surga Terakhir: Investigasi Greenpeace Ungkap Rencana Besar Industri Nikel di Raja Ampat',
        description:
          'Greenpeace Indonesia meluncurkan sebuah laporan yang mengungkap rencana penambangan nikel di Raja Ampat secara utuh.',
        date: '2025-06-12 12:52:59.000',
        status: 0,
        createdDate: '18 Jun 2025 12:52',
        updatedDate: '18 Jun 2025 12:52',
      },
    ];

    const response = DsStandardResponse(200, 'ok', data, data.length);

    return response;
  }
}

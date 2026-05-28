const translations = {
    mn: {
        nav_home: "Эхлэл", nav_services: "Үйлчилгээ", nav_featured: "Онцлох", nav_contact: "Холбогдох", nav_signin: "Нэвтрэх",
        hero_title1: "Discover Nomadic Life", hero_title2: "Монголд Тавтай Морил",
        hero_sub: "Гэр, байшин, машин, хөтөч түрээслэж жинхэнэ нүүдэлчдийн аялалыг мэдрээрэй.",
        search_where: "Хаана", search_where_ph: "Улаанбаатар, Тэрэлж...", search_dates: "Огноо", search_guests: "Хүн", search_btn: "Хайх",
        guest_1: "1 Хүн", guest_2: "2 Хүн", guest_3: "3-4 Хүн", guest_5: "5+ Хүн",
        cat_title: "Аялалын үйлчилгээнүүд", cat_sub: "Танд хэрэгтэй бүхнийг нэг дороос",
        cat_ger_title: "Гэр Түрээс", cat_ger_sub: "Гэр болон Юрта",
        cat_cabin_title: "Амралтын Байшин", cat_cabin_sub: "Зуслангийн байшин",
        cat_car_title: "Машин Түрээс", cat_car_sub: "Offroad Машин",
        cat_hotel_title: "Зочид Буудал", cat_hotel_sub: "Буудлын захиалга",
        cat_guide_title: "Хөтөч, Орчуулагч", cat_guide_sub: "Орон нутгийн хөтөч",
        feat1_title: "Дэлхийн хаанаас ч", feat1_sub: "Олон улсын төлбөрийн систем, хэлний сонголттой.",
        feat2_title: "Найдвартай", feat2_sub: "Баталгаажсан түрээслүүлэгч, чанарын өндөр стандарт.",
        feat3_title: "24/7 Тусламж", feat3_sub: "Олон хэл дээр тасралтгүй үйлчилгээ.",
        footer_desc: "Монгол улсын аялал жуулчлал, түрээсийн нэгдсэн платформ.", footer_copy: "&copy; 2026 iMongolia Platform. Бүх эрх хуулиар хамгаалагдсан.",
        
        filter_title: "Шүүлтүүр", filter_city: "Хот/Аймаг", filter_rating: "Одны зэрэглэл", filter_all: "Бүгд", filter_btn: "Шүүх",
        loc_terelj: "Тэрэлж", loc_tsonjin: "Цонжин болдог", loc_khamar: "Хамрын хийд", loc_khyargas: "Хяргас нуур", city_ub: "Улаанбаатар", city_darkhan: "Дархан",
        per_night: "/ шөнө", per_day: "/ өдөр", book_now: "Захиалах",
        
        hotel_page_title: "Зочид Буудал", hotel_page_sub: "Монгол дахь шилдэг зочид буудлууд",
        hotel_terelj_name: "Terelj Mountain Lodge", hotel_terelj_desc: "Байгалийн үзэсгэлэнт газар байрлах, рашаан сувиллын цогцолбор.",
        hotel_tsonjin_name: "Chinggis Resort Hotel", hotel_tsonjin_desc: "Морьт хөшөөний дэргэд байрлах орчин үеийн зочид буудал.",
        hotel_khamar_name: "Energy Center Hotel", hotel_khamar_desc: "Хамрын хийдийн энергит бүсэд ойр байрлах тохилог буудал.",
        hotel_khyargas_name: "Khetsuu Khad Resort", hotel_khyargas_desc: "Хяргас нуурын Хэцүү хадны хажууд байрлах тансаг зэрэглэлийн амралт.",
        
        ger_page_title: "Гэр Түрээс", ger_page_sub: "Уламжлалт нүүдэлчин ахуйг мэдрүүлэх гэрүүд",
        ger_terelj_name: "Nomadic Family Ger", ger_terelj_desc: "Жинхэнэ малчин айлд байрлаж, нүүдэлчин ахуйтай танилцах боломж.",
        ger_tsonjin_name: "Equestrian Yurt Camp", ger_tsonjin_desc: "Морь унах боломжтой, тохилог гэр бааз.",
        ger_khamar_name: "Shambhala Ger Camp", ger_khamar_desc: "Говийн гайхалтай энерги, оддыг харах боломжтой гэр бааз.",
        ger_khyargas_name: "Lake Side Nomad Ger", ger_khyargas_desc: "Хяргас нуурын эрэг дээрх уламжлалт гэр түрээс.",
        
        cabin_page_title: "Амралтын Байшин", cabin_page_sub: "Байгалийн сайханд байрлах тав тухтай хаус, байшингууд",
        cabin_terelj_name: "Pine Tree Cabin", cabin_terelj_desc: "Ойн гүнд байрлах модон байшин, гэр бүлийн амралтанд тохиромжтой.",
        cabin_tsonjin_name: "Steppe View House", cabin_tsonjin_desc: "Тал хээрийн үзэсгэлэнг тольдох орчин үеийн цэлгэр хаус.",
        cabin_khamar_name: "Desert Oasis Cabin", cabin_khamar_desc: "Говийн дунд байрлах тохилог модон хаус.",
        cabin_khyargas_name: "Blue Water Retreat", cabin_khyargas_desc: "Нуурын мандал руу харсан цонхтой тансаг амралтын байшин.",

        car_page_title: "Машин Түрээс", car_page_sub: "Хөдөө орон нутагт аялахад зориулагдсан бартаат замын машинууд",
        car_1_name: "Toyota Land Cruiser 200", car_1_loc: "Улаанбаатар хотоос авах", car_1_desc: "Бартаат замд найдвартай, тав тухтай 4x4 бүрэн тоноглолтой машин.",
        car_2_name: "UAZ Patriot", car_2_loc: "Улаанбаатар хотоос авах", car_2_desc: "Монголын нөхцөлд хамгийн тохиромжтой, туулах чадвар өндөртэй машин.",
        car_3_name: "Lexus LX570", car_3_loc: "Улаанбаатар хотоос авах", car_3_desc: "Тансаг зэрэглэлийн аялалд зориулсан VIP машин, мэргэжлийн жолоочтой.",
        
        guide_page_title: "Хөтөч, Орчуулагч", guide_page_sub: "Таны аялалыг саадгүй, дурсамжтай болгох мэргэжлийн хөтөч нар",
        guide_1_name: "Бат-Эрдэнэ (Англи хэлтэй)", guide_1_loc: "Монгол орон даяар", guide_1_desc: "10 гаруй жилийн туршлагатай, байгаль түүхийн өргөн мэдлэгтэй ахлах хөтөч.",
        guide_2_name: "Сарнай (Солонгос хэлтэй)", guide_2_loc: "Улаанбаатар болон ойр орчим", guide_2_desc: "Солонгос жуулчдад зориулсан тусгай хөтөлбөр гаргагч, найрсаг хөтөч.",
        guide_3_name: "Ганболд (Мэргэжлийн гэрэл зурагчин, хөтөч)", guide_3_loc: "Говь болон баруун аймгууд", guide_3_desc: "Байгалийн гэрэл зураг авах дуртай аялагчдад зориулсан тусгай хөтөч."
    },
    ko: {
        nav_home: "홈", nav_services: "서비스", nav_featured: "추천", nav_contact: "연락처", nav_signin: "로그인",
        hero_title1: "유목 민족의 삶을 발견하세요", hero_title2: "몽골에 오신 것을 환영합니다",
        hero_sub: "게르, 오두막, 자동차, 가이드를 대여하여 진정한 유목 민족의 여행을 경험하세요.",
        search_where: "어디로", search_where_ph: "울란바토르, 테렐지...", search_dates: "날짜", search_guests: "인원", search_btn: "검색",
        guest_1: "1명", guest_2: "2명", guest_3: "3-4명", guest_5: "5명 이상",
        cat_title: "여행 서비스", cat_sub: "필요한 모든 것을 한곳에서",
        cat_ger_title: "게르 대여", cat_ger_sub: "몽골 전통 게르",
        cat_cabin_title: "오두막 대여", cat_cabin_sub: "별장 및 하우스",
        cat_car_title: "렌터카", cat_car_sub: "오프로드 차량",
        cat_hotel_title: "호텔 예약", cat_hotel_sub: "호텔",
        cat_guide_title: "가이드 및 통역", cat_guide_sub: "현지 가이드",
        feat1_title: "세계 어디서나", feat1_sub: "글로벌 결제 및 다국어 지원.",
        feat2_title: "신뢰성", feat2_sub: "검증된 호스트, 높은 품질 기준.",
        feat3_title: "24/7 고객 지원", feat3_sub: "다양한 언어로 연중무휴 지원.",
        footer_desc: "몽골 여행 및 렌탈 통합 플랫폼.", footer_copy: "&copy; 2026 iMongolia Platform. 모든 권리 보유.",
        
        filter_title: "필터", filter_city: "도시/지역", filter_rating: "성급", filter_all: "모두", filter_btn: "적용",
        loc_terelj: "테렐지", loc_tsonjin: "촌진볼독", loc_khamar: "하마링 히드", loc_khyargas: "햐르가스 호수", city_ub: "울란바토르", city_darkhan: "다르항",
        per_night: "/ 1박", per_day: "/ 1일", book_now: "예약하기",
        
        hotel_page_title: "호텔", hotel_page_sub: "몽골 최고의 호텔들",
        hotel_terelj_name: "테렐지 마운틴 롯지", hotel_terelj_desc: "아름다운 자연 속에 위치한 스파 리조트 단지.",
        hotel_tsonjin_name: "칭기즈 리조트 호텔", hotel_tsonjin_desc: "기마상 옆에 위치한 현대적인 호텔.",
        hotel_khamar_name: "에너지 센터 호텔", hotel_khamar_desc: "하마링 히드 에너지 구역 근처의 편안한 호텔.",
        hotel_khyargas_name: "헤추 하드 리조트", hotel_khyargas_desc: "햐르가스 호수의 헤추 하드 바위 옆에 위치한 럭셔리 리조트.",
        
        ger_page_title: "게르 대여", ger_page_sub: "전통 유목 민족의 삶을 느낄 수 있는 게르",
        ger_terelj_name: "노마딕 패밀리 게르", ger_terelj_desc: "실제 유목민 가족과 머물며 유목 생활을 체험할 수 있는 기회.",
        ger_tsonjin_name: "이퀘스트리안 게르 캠프", ger_tsonjin_desc: "승마가 가능한 편안한 게르 캠프.",
        ger_khamar_name: "샴발라 게르 캠프", ger_khamar_desc: "놀라운 고비 사막의 에너지와 별을 볼 수 있는 게르 캠프.",
        ger_khyargas_name: "호숫가 노마드 게르", ger_khyargas_desc: "햐르가스 호숫가의 전통 게르 대여.",
        
        cabin_page_title: "오두막 대여", cabin_page_sub: "아름다운 자연 속에 위치한 편안한 별장과 오두막",
        cabin_terelj_name: "파인 트리 오두막", cabin_terelj_desc: "숲 속에 위치한 목조 주택, 가족 휴가에 적합합니다.",
        cabin_tsonjin_name: "스텝 뷰 하우스", cabin_tsonjin_desc: "대초원의 전망을 감상할 수 있는 넓고 현대적인 집.",
        cabin_khamar_name: "데저트 오아시스 오두막", cabin_khamar_desc: "고비 사막 한가운데 위치한 편안한 목조 오두막.",
        cabin_khyargas_name: "블루 워터 리트리트", cabin_khyargas_desc: "호수를 바라보는 창문이 있는 럭셔리 별장.",

        car_page_title: "렌터카", car_page_sub: "시골 여행을 위한 오프로드 차량",
        car_1_name: "도요타 랜드크루저 200", car_1_loc: "울란바토르 픽업", car_1_desc: "오프로드에서 신뢰할 수 있고 편안한 풀옵션 4x4 차량.",
        car_2_name: "UAZ 패트리어트", car_2_loc: "울란바토르 픽업", car_2_desc: "몽골 환경에 가장 적합한 오프로드 차량.",
        car_3_name: "렉서스 LX570", car_3_loc: "울란바토르 픽업", car_3_desc: "고급 여행을 위한 VIP 차량 (전문 운전기사 포함).",
        
        guide_page_title: "가이드 및 통역", guide_page_sub: "여행을 원활하고 기억에 남게 만들어 줄 전문 가이드",
        guide_1_name: "바트에르데네 (영어 지원)", guide_1_loc: "몽골 전역", guide_1_desc: "10년 이상의 경험과 자연 및 역사에 대한 풍부한 지식을 갖춘 수석 가이드.",
        guide_2_name: "사르나이 (한국어 지원)", guide_2_loc: "울란바토르 및 인근", guide_2_desc: "한국 관광객을 위한 특별 프로그램 제공, 친절 가이드.",
        guide_3_name: "간볼드 (전문 사진작가)", guide_3_loc: "고비 및 서부 지역", guide_3_desc: "자연 사진 촬영을 좋아하는 여행객을 위한 특별 가이드."
    },
    en: {
        nav_home: "Home", nav_services: "Services", nav_featured: "Featured", nav_contact: "Contact", nav_signin: "Sign In",
        hero_title1: "Discover Nomadic Life", hero_title2: "Welcome to Mongolia",
        hero_sub: "Rent a ger, cabin, car, or guide and experience a true nomadic journey.",
        search_where: "Where", search_where_ph: "Ulaanbaatar, Terelj...", search_dates: "Dates", search_guests: "Guests", search_btn: "Search",
        guest_1: "1 Guest", guest_2: "2 Guests", guest_3: "3-4 Guests", guest_5: "5+ Guests",
        cat_title: "Travel Services", cat_sub: "Everything you need in one place",
        cat_ger_title: "Ger Rentals", cat_ger_sub: "Traditional Yurt",
        cat_cabin_title: "Cabin Rentals", cat_cabin_sub: "House & Cabin",
        cat_car_title: "Car Rentals", cat_car_sub: "Offroad Vehicles",
        cat_hotel_title: "Hotels", cat_hotel_sub: "Book a Hotel",
        cat_guide_title: "Local Guides", cat_guide_sub: "Interpreters & Guides",
        feat1_title: "From Anywhere", feat1_sub: "International payments & multi-language support.",
        feat2_title: "Reliable", feat2_sub: "Verified hosts, high quality standards.",
        feat3_title: "24/7 Support", feat3_sub: "Continuous multi-language support.",
        footer_desc: "Mongolia's integrated travel and rental platform.", footer_copy: "&copy; 2026 iMongolia Platform. All Rights Reserved.",
        
        filter_title: "Filters", filter_city: "City/Region", filter_rating: "Star Rating", filter_all: "All", filter_btn: "Apply",
        loc_terelj: "Terelj", loc_tsonjin: "Tsonjin Boldog", loc_khamar: "Khamriin Khiid", loc_khyargas: "Khyargas Nuur", city_ub: "Ulaanbaatar", city_darkhan: "Darkhan",
        per_night: "/ night", per_day: "/ day", book_now: "Book Now",
        
        hotel_page_title: "Hotels", hotel_page_sub: "Top hotels in Mongolia",
        hotel_terelj_name: "Terelj Mountain Lodge", hotel_terelj_desc: "A spa resort complex located in a beautiful natural area.",
        hotel_tsonjin_name: "Chinggis Resort Hotel", hotel_tsonjin_desc: "Modern hotel located next to the equestrian statue.",
        hotel_khamar_name: "Energy Center Hotel", hotel_khamar_desc: "Comfortable hotel located near the Khamar Monastery energy zone.",
        hotel_khyargas_name: "Khetsuu Khad Resort", hotel_khyargas_desc: "Luxury resort located next to Khetsuu Khad rock at Khyargas Lake.",
        
        ger_page_title: "Ger Rentals", ger_page_sub: "Experience traditional nomadic life in a ger",
        ger_terelj_name: "Nomadic Family Ger", ger_terelj_desc: "Stay with a real nomad family and experience their lifestyle.",
        ger_tsonjin_name: "Equestrian Yurt Camp", ger_tsonjin_desc: "Comfortable ger camp with horse riding opportunities.",
        ger_khamar_name: "Shambhala Ger Camp", ger_khamar_desc: "Ger camp where you can feel the Gobi energy and stargaze.",
        ger_khyargas_name: "Lake Side Nomad Ger", ger_khyargas_desc: "Traditional ger rental on the shore of Khyargas lake.",
        
        cabin_page_title: "Cabin Rentals", cabin_page_sub: "Comfortable houses and cabins located in beautiful nature",
        cabin_terelj_name: "Pine Tree Cabin", cabin_terelj_desc: "Wooden cabin deep in the forest, perfect for family vacations.",
        cabin_tsonjin_name: "Steppe View House", cabin_tsonjin_desc: "Spacious modern house overlooking the beautiful steppe.",
        cabin_khamar_name: "Desert Oasis Cabin", cabin_khamar_desc: "Comfortable wooden cabin in the middle of the Gobi desert.",
        cabin_khyargas_name: "Blue Water Retreat", cabin_khyargas_desc: "Luxury retreat house with windows facing the lake.",

        car_page_title: "Car Rentals", car_page_sub: "Offroad vehicles designed for countryside travel",
        car_1_name: "Toyota Land Cruiser 200", car_1_loc: "Pick up from Ulaanbaatar", car_1_desc: "Reliable and comfortable fully equipped 4x4 car for offroad.",
        car_2_name: "UAZ Patriot", car_2_loc: "Pick up from Ulaanbaatar", car_2_desc: "The most suitable car for Mongolian conditions with high offroad capability.",
        car_3_name: "Lexus LX570", car_3_loc: "Pick up from Ulaanbaatar", car_3_desc: "VIP car for luxury travel, with a professional driver.",
        
        guide_page_title: "Local Guides", guide_page_sub: "Professional guides to make your trip smooth and memorable",
        guide_1_name: "Bat-Erdene (English Speaking)", guide_1_loc: "All over Mongolia", guide_1_desc: "Senior guide with over 10 years of experience and extensive knowledge of nature and history.",
        guide_2_name: "Sarnai (Korean Speaking)", guide_2_loc: "Ulaanbaatar and surrounding areas", guide_2_desc: "Friendly guide offering special programs for Korean tourists.",
        guide_3_name: "Ganbold (Professional Photographer)", guide_3_loc: "Gobi and western regions", guide_3_desc: "Special guide for travelers who love taking nature photography."
    }
};

const exchangeRates = {
    mn: { rate: 1, symbol: '₮', locale: 'mn-MN' },
    ko: { rate: 0.40, symbol: '₩', locale: 'ko-KR' },
    en: { rate: 0.0003, symbol: '$', locale: 'en-US' }
};

const listingsData = {
    hotels: [
        { id: "h1", loc_id: "terelj", price: 280000, img: "file:///C:/Users/313ST000/.gemini/antigravity/brain/5ffccb01-1d8f-4a98-827c-e7742677f162/rental_hotel_1779332468909.png", nameKey: "hotel_terelj_name", locKey: "loc_terelj", descKey: "hotel_terelj_desc", ratingHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>', reviews: 89, unitKey: "per_night" },
        { id: "h2", loc_id: "tsonjin", price: 150000, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", nameKey: "hotel_tsonjin_name", locKey: "loc_tsonjin", descKey: "hotel_tsonjin_desc", ratingHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>', reviews: 120, unitKey: "per_night" },
        { id: "h3", loc_id: "khamar", price: 120000, img: "file:///C:/Users/313ST000/.gemini/antigravity/brain/5ffccb01-1d8f-4a98-827c-e7742677f162/hotel_exterior_1779333436630.png", nameKey: "hotel_khamar_name", locKey: "loc_khamar", descKey: "hotel_khamar_desc", ratingHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i>', reviews: 45, unitKey: "per_night" },
        { id: "h4", loc_id: "khyargas", price: 210000, img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", nameKey: "hotel_khyargas_name", locKey: "loc_khyargas", descKey: "hotel_khyargas_desc", ratingHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>', reviews: 67, unitKey: "per_night" }
    ],
    gers: [
        { id: "g1", loc_id: "terelj", price: 80000, img: "file:///C:/Users/313ST000/.gemini/antigravity/brain/5ffccb01-1d8f-4a98-827c-e7742677f162/rental_ger_1779332271763.png", nameKey: "ger_terelj_name", locKey: "loc_terelj", descKey: "ger_terelj_desc", ratingHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>', reviews: 210, unitKey: "per_night" },
        { id: "g2", loc_id: "tsonjin", price: 95000, img: "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", nameKey: "ger_tsonjin_name", locKey: "loc_tsonjin", descKey: "ger_tsonjin_desc", ratingHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>', reviews: 154, unitKey: "per_night" },
        { id: "g3", loc_id: "khamar", price: 70000, img: "https://images.unsplash.com/photo-1545806657-37e4c965e6d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", nameKey: "ger_khamar_name", locKey: "loc_khamar", descKey: "ger_khamar_desc", ratingHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>', reviews: 32, unitKey: "per_night" },
        { id: "g4", loc_id: "khyargas", price: 110000, img: "https://images.unsplash.com/photo-1504150558240-1bdf2a0809b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", nameKey: "ger_khyargas_name", locKey: "loc_khyargas", descKey: "ger_khyargas_desc", ratingHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>', reviews: 88, unitKey: "per_night" }
    ],
    cabins: [
        { id: "c1", loc_id: "terelj", price: 250000, img: "file:///C:/Users/313ST000/.gemini/antigravity/brain/5ffccb01-1d8f-4a98-827c-e7742677f162/rental_cabin_1779332415318.png", nameKey: "cabin_terelj_name", locKey: "loc_terelj", descKey: "cabin_terelj_desc", ratingHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>', reviews: 112, unitKey: "per_night" },
        { id: "c2", loc_id: "tsonjin", price: 180000, img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", nameKey: "cabin_tsonjin_name", locKey: "loc_tsonjin", descKey: "cabin_tsonjin_desc", ratingHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i>', reviews: 65, unitKey: "per_night" },
        { id: "c3", loc_id: "khamar", price: 150000, img: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", nameKey: "cabin_khamar_name", locKey: "loc_khamar", descKey: "cabin_khamar_desc", ratingHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>', reviews: 41, unitKey: "per_night" },
        { id: "c4", loc_id: "khyargas", price: 280000, img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", nameKey: "cabin_khyargas_name", locKey: "loc_khyargas", descKey: "cabin_khyargas_desc", ratingHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>', reviews: 92, unitKey: "per_night" }
    ]
};

let currentLang = 'mn';

document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    if(navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Search button interaction
    const searchBtn = document.querySelector('.btn-search');
    if(searchBtn) {
        searchBtn.addEventListener('click', () => {
            const searchInput = document.querySelector('.search-input input[type="text"]');
            if(searchInput && searchInput.value) {
                alert(`Searching in: ${searchInput.value}`);
            }
        });
    }

    // Dynamic Rendering Logic for listings pages
    const listingSection = document.querySelector('.listing-section');
    const locationFilter = document.getElementById('location-filter');
    
    if (listingSection && locationFilter) {
        const category = listingSection.getAttribute('data-category');
        
        // Initial render
        renderListings(category, 'all');

        // Render on filter change
        locationFilter.addEventListener('change', (e) => {
            renderListings(category, e.target.value);
        });
    }

    // Language Selector Logic
    const langSelector = document.getElementById('lang-selector');
    if(langSelector) {
        langSelector.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
        // Initial set language
        setLanguage(langSelector.value);
    }

    // Modal Logic with Event Delegation
    const bookingModal = document.getElementById('bookingModal');
    const bookingForm = document.getElementById('bookingForm');
    const loginModal = document.getElementById('loginModal');
    const loginForm = document.getElementById('loginForm');
    
    document.addEventListener('click', (e) => {
        // Open booking modal
        if (e.target.classList.contains('btn-book') || e.target.closest('.btn-book') || (e.target.getAttribute('data-i18n') === 'book_now')) {
            if (bookingModal) bookingModal.classList.add('show');
        }
        
        // Open login modal
        if (e.target.getAttribute('data-i18n') === 'nav_signin' || e.target.closest('[data-i18n="nav_signin"]')) {
            if (loginModal) loginModal.classList.add('show');
        }
        
        // Close modal (x button)
        if (e.target.classList.contains('close-modal') || e.target.closest('.close-modal')) {
            if (bookingModal) bookingModal.classList.remove('show');
            if (loginModal) loginModal.classList.remove('show');
        }
        
        // Close modal (clicking outside)
        if (e.target === bookingModal) {
            bookingModal.classList.remove('show');
        }
        if (e.target === loginModal) {
            loginModal.classList.remove('show');
        }
    });

    // Handle booking submit
    if(bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Захиалга амжилттай илгээгдлээ! Бид тантай удахгүй холбогдох болно.');
            bookingModal.classList.remove('show');
            bookingForm.reset();
        });
    }

    // Handle login submit
    if(loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Амжилттай нэвтэрлээ!');
            loginModal.classList.remove('show');
            loginForm.reset();
        });
    }
});

function renderListings(category, locationFilter) {
    const container = document.getElementById('dynamic-listings');
    if (!container || !listingsData[category]) return;
    
    container.innerHTML = '';
    
    const items = listingsData[category];
    
    // Filter items
    const filteredItems = locationFilter === 'all' 
        ? items 
        : items.filter(item => item.loc_id === locationFilter);
        
    if (filteredItems.length === 0) {
        container.innerHTML = `<p style="color: white; padding: 20px;">Энэ байршилд одоогоор мэдээлэл байхгүй байна.</p>`;
        return;
    }
    
    // Render HTML
    filteredItems.forEach(item => {
        const cardHTML = `
            <div class="listing-card glass-panel">
                <div class="listing-img" style="background-image: url('${item.img}');"></div>
                <div class="listing-info">
                    <div class="rating">
                        ${item.ratingHtml}
                        <span>(${item.reviews} reviews)</span>
                    </div>
                    <h3 data-i18n="${item.nameKey}"></h3>
                    <p class="location"><i class="fa-solid fa-location-dot"></i> <span data-i18n="${item.locKey}"></span></p>
                    <p class="desc" data-i18n="${item.descKey}"></p>
                    <div class="price-action">
                        <div class="price"><span class="amount" data-price="${item.price}"></span> <span class="per-night" data-i18n="${item.unitKey}"></span></div>
                        <button class="btn-primary btn-book" data-i18n="book_now"></button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });

    // Re-apply translations after rendering new elements
    setLanguage(currentLang);
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Translate Texts
    const els = document.querySelectorAll('[data-i18n]');
    els.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang] && translations[lang][key]) {
            if(el.tagName === 'OPTION') {
                el.textContent = translations[lang][key];
            } else if(key === 'footer_copy') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if(translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Convert Prices
    const priceEls = document.querySelectorAll('[data-price]');
    priceEls.forEach(el => {
        const basePrice = parseFloat(el.getAttribute('data-price'));
        if (!isNaN(basePrice)) {
            const converted = basePrice * exchangeRates[lang].rate;
            el.textContent = exchangeRates[lang].symbol + converted.toLocaleString(exchangeRates[lang].locale, { maximumFractionDigits: 0 });
        }
    });
}

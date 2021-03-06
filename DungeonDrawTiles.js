var DungeonDrawTiles = (function () {
    'use strict';
    var textures = [];
    
    textures['Old School|#18769c'] = [
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8736624/jpVc2CyG315UC7_KG-4lLA/thumb.jpg?1428598086', key: 'DD_001', value: 124, mask: 125, dlBits: 124, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8736635/p6rUl06K5Bd-qcaDthhEtg/thumb.jpg?1428598089', key: 'DD_002', value: 112, mask: 253, dlBits: 112, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8736629/CcW6Chsd6Iv6LXnXrTzDTg/thumb.jpg?1428598087', key: 'DD_003', value: 64,  mask: 85,  dlBits: 64,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8736630/vmwqQaO1D3bEotC8tIKTLA/thumb.jpg?1428598087', key: 'DD_004', value: 0,   mask: 85,  dlBits: 0,   diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8736631/pHyXGafFrWNKXXu5tmd8Mw/thumb.jpg?1428598087', key: 'DD_005', value: 68,  mask: 85,  dlBits: 68,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8736628/eu3QlpokYlkmaI15cCqT6w/thumb.jpg?1428598087', key: 'DD_006', value: 255, mask: 255, dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9083548/yhtx0PcBzRS9cW__3zc2vw/thumb.jpg?1430171082', key: 'DD_007', value: 116, mask: 125, dlBits: 116, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9083563/QxOED0lC8VJXO7qDi5iwjw/thumb.jpg?1430171178', key: 'DD_008', value: 92,  mask: 125, dlBits: 92,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9083609/Ic0YmxnPF8_d_3-wCWmgiA/thumb.jpg?1430171382', key: 'DD_009', value: 84,  mask: 125, dlBits: 84,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9083581/6_3wMelqLRj2tmyrCMFAiQ/thumb.jpg?1430171274', key: 'DD_010', value: 80,  mask: 117, dlBits: 80,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9084443/3G_qbLg9c7V8sWIKkM_AjA/thumb.jpg?1430174411', key: 'DD_011', value: 253, mask: 255, dlBits: 253, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9083729/5cEeLXANLFOLGoYTE5bnXA/thumb.jpg?1430172119', key: 'DD_012', value: 125, mask: 255, dlBits: 125, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9083730/AR5TRsW0bMx-Di5Oxqzxug/thumb.jpg?1430172124', key: 'DD_013', value: 221, mask: 255, dlBits: 221, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9083734/YPJCqxaxCwVu0pq9T389_Q/thumb.jpg?1430172140', key: 'DD_014', value: 213, mask: 255, dlBits: 213, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9083735/spGsG8bAdjT4ohW-n98bug/thumb.jpg?1430172145', key: 'DD_015', value: 85,  mask: 255, dlBits: 85,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9083856/X0ZPX50cO8Q76ugk6vtNIw/thumb.png?1430172900', key: 'DD_016', value: 248, mask: 255, dlBits: 248, diag: true },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9083856/X0ZPX50cO8Q76ugk6vtNIw/thumb.png?1430172900', key: 'DD_016', value: 240, mask: 255, dlBits: 240, diag: true },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9083856/X0ZPX50cO8Q76ugk6vtNIw/thumb.png?1430172900', key: 'DD_016', value: 120, mask: 255, dlBits: 120, diag: true },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8359832/YuvE9XRSWo-y4AUb41h0Ag/thumb.jpg?1426895538', key: 'DD_017', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9084038/LbgeCOOyFHqqlMTgsg0lug/thumb.jpg?1430173798', key: 'DD_018', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9084039/_NYEhQQs-I2jXBw2kLK5JQ/thumb.jpg?1430173803', key: 'DD_019', value: 255,  mask: 0,  dlBits: 255, diag: false},
	{url: 'https://s3.amazonaws.com/files.d20.io/images/9084041/gY1VFAYA4tnv-N5h-nfWLQ/thumb.jpg?1430173808', key: 'DD_020', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9085582/i4FrCRT7ABN4rq-Iyqw6dw/thumb.png?1430176908', key: 'DD_021', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9085580/Mv8quTyERzwsErm1TUNqoA/thumb.png?1430176902', key: 'DD_022', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9085569/1jFw820SS-XG13kU-Pj9xQ/thumb.png?1430176888', key: 'DD_023', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9085575/I4ieJGt6L-qsMYSkG2Xolw/thumb.png?1430176896', key: 'DD_024', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8361290/poZyYdre0iC8YaBGvOfRmw/thumb.png?1426898734', key: 'DD_025', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8361291/Ztj6gMPCAo7JHlOF1cTJzQ/thumb.png?1426898734', key: 'DD_026', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8361288/OcHzOh5PoOG_iG6d5XYWyA/thumb.png?1426898733', key: 'DD_027', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8361292/_PFpz0mdJab3EEjK3qENyw/thumb.png?1426898734', key: 'DD_028', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8362433/kMaAYdxWK3El2Z9Kcss9pg/thumb.png?1426901892', key: 'DD_029', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8362435/ssksMoaDtH6Sd14cyxgf6A/thumb.png?1426901893', key: 'DD_030', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8355705/lAOk50K-enTXeAr6KpXeEg/thumb.jpg?1426884848', key: 'DD_031', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8355721/78fMSTM6rUxw334Tc6tk_g/thumb.jpg?1426884854', key: 'DD_032', value: 255,  mask: 0,  dlBits: 255, diag: false}
    ];
    
        textures['Basic Dungeon|#000000'] = [
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9093933/A_VXJrtKkoVD0t28zLXUgA/thumb.jpg?1430224455', key: 'DD_001', value: 124, mask: 125, dlBits: 124, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9093931/Jfntcx0qwo4198WdGh05EQ/thumb.jpg?1430224455', key: 'DD_002', value: 112, mask: 253, dlBits: 112, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9093932/fK1T_uwxwqNRjeTvqoJyug/thumb.jpg?1430224455', key: 'DD_003', value: 64,  mask: 85,  dlBits: 64,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9093935/3JfV4J9hNNKU-EcNm2vRVw/thumb.jpg?1430224455', key: 'DD_004', value: 0,   mask: 85,  dlBits: 0,   diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9093939/Eq0i8_eaYCQnj4RK0nNd1g/thumb.jpg?1430224456', key: 'DD_005', value: 68,  mask: 85,  dlBits: 68,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8399394/3ia5PeuD1RpzvRb-Yw01Qg/thumb.jpg?1427051987', key: 'DD_006', value: 255, mask: 255, dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9093936/aDTqbjLY0_OwL65XgVSaTw/thumb.jpg?1430224456', key: 'DD_007', value: 116, mask: 125, dlBits: 116, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9093937/mHe0RlTp-0OiNHALmzI3Xw/thumb.jpg?1430224456', key: 'DD_008', value: 92,  mask: 125, dlBits: 92,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9093945/ESU3I8rHipyT9pDc7JXIog/thumb.jpg?1430224458', key: 'DD_009', value: 84,  mask: 125, dlBits: 84,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9093940/9dUhvILMtxbxDtKCLBKhfA/thumb.jpg?1430224456', key: 'DD_010', value: 80,  mask: 117, dlBits: 80,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9093943/mjodx3fEqqk91LOsO1w07w/thumb.jpg?1430224457', key: 'DD_011', value: 253, mask: 255, dlBits: 253, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9093941/HaBd_fYWlJ5wlke9OxdCBw/thumb.jpg?1430224457', key: 'DD_012', value: 125, mask: 255, dlBits: 125, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9093942/wMIyS_8aKry1kzPn5NNF8A/thumb.jpg?1430224457', key: 'DD_013', value: 221, mask: 255, dlBits: 221, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9093944/nP908N67xXnmFsXYZO0H3g/thumb.jpg?1430224458', key: 'DD_014', value: 213, mask: 255, dlBits: 213, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9093946/u63og9lajviIymr-hlGh1w/thumb.jpg?1430224459', key: 'DD_015', value: 85,  mask: 255, dlBits: 85,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9093934/1sRBJtg0VLuZExZgY78Brg/thumb.png?1430224455', key: 'DD_016', value: 248, mask: 255, dlBits: 248, diag: true },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9093934/1sRBJtg0VLuZExZgY78Brg/thumb.png?1430224455', key: 'DD_016', value: 240, mask: 255, dlBits: 240, diag: true },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9093934/1sRBJtg0VLuZExZgY78Brg/thumb.png?1430224455', key: 'DD_016', value: 120, mask: 255, dlBits: 120, diag: true },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8399395/hq6ryhmr3eVSboQry-VA8g/thumb.jpg?1427051987', key: 'DD_017', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9094388/7ULa7HIeI7cMs74sURhE7A/thumb.jpg?1430226122', key: 'DD_018', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9094411/zTIHBlz06pa74QhTxhfkww/thumb.jpg?1430226132', key: 'DD_019', value: 255,  mask: 0,  dlBits: 255, diag: false},
    	{url: 'https://s3.amazonaws.com/files.d20.io/images/9094416/vgClb3K0HUhmDioK6Aos9w/thumb.jpg?1430226135', key: 'DD_020', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9094772/fVT9dPaijWIW0GaFKvSJHg/thumb.png?1430227129', key: 'DD_021', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9094770/lTOik0MTjcz0_F15ZOx2WQ/thumb.png?1430227129', key: 'DD_022', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9094773/cZhl2o9cssXB5Df7DNk3hg/thumb.png?1430227129', key: 'DD_023', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9094771/A0hre_Vxa4bSvfZZ7JzxNw/thumb.png?1430227129', key: 'DD_024', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8361293/rHdIGwU_lYZ2f3uEKswBIw/thumb.png?1426898735', key: 'DD_025', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8361294/D_U0V8YOnFXoud0OAbYyiQ/thumb.png?1426898735', key: 'DD_026', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8361629/dQ4bqXU8i_drCsqS3cQMsQ/thumb.png?1426899639', key: 'DD_027', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8361683/tsrstbhhP5Tz5rkv7eDfMg/thumb.png?1426899769', key: 'DD_028', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8362433/kMaAYdxWK3El2Z9Kcss9pg/thumb.png?1426901892', key: 'DD_029', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8362434/zVnBI58-G3kQ7_h_6TuXEA/thumb.png?1426901892', key: 'DD_030', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8399426/hXMq9r0T-Xix9as3SQ3uLg/thumb.jpg?1427051992', key: 'DD_031', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8399434/927Z3tdunmoUTBeR7Es3Ag/thumb.jpg?1427051993', key: 'DD_032', value: 255,  mask: 0,  dlBits: 255, diag: false}
    ];
    
     textures['Stone Floor Dungeon|#31392a'] = [
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095143/5KmT60oCA0iYDE8CSvZNpw/thumb.jpg?1430230080', key: 'DD_001', value: 124, mask: 125, dlBits: 124, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095147/qtsFYYjI1LwSq4g0vNq9dQ/thumb.jpg?1430230085', key: 'DD_002', value: 112, mask: 253, dlBits: 112, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095145/6mgg0f3H4ju5Np3tGX03SA/thumb.jpg?1430230085', key: 'DD_003', value: 64,  mask: 85,  dlBits: 64,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095144/dv6mQurHQ-M5WA_4nulIAw/thumb.jpg?1430230085', key: 'DD_004', value: 0,   mask: 85,  dlBits: 0,   diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095146/UOZS6W2dGxcJHrAuoc3YNg/thumb.jpg?1430230085', key: 'DD_005', value: 68,  mask: 85,  dlBits: 68,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095153/s5CxsJ-R4VWTHY2iD5KwFw/thumb.jpg?1430230087', key: 'DD_006', value: 255, mask: 255, dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095149/6yOmX7SaWIuo8HceGQk46Q/thumb.jpg?1430230086', key: 'DD_007', value: 116, mask: 125, dlBits: 116, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095152/CwRTP4C1PecQzNIUcb0oTg/thumb.jpg?1430230087', key: 'DD_008', value: 92,  mask: 125, dlBits: 92,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095150/MB3bjvId2EPDPx-0q1g-AQ/thumb.jpg?1430230086', key: 'DD_009', value: 84,  mask: 125, dlBits: 84,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095151/fvUfv4N4fJ41gM5HtBN6Ug/thumb.jpg?1430230087', key: 'DD_010', value: 80,  mask: 117, dlBits: 80,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095157/rxAd-TDpoFmmeQcN0LsifQ/thumb.jpg?1430230088', key: 'DD_011', value: 253, mask: 255, dlBits: 253, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095154/aJXCesjXGPMeKxijx6tQfA/thumb.jpg?1430230088', key: 'DD_012', value: 125, mask: 255, dlBits: 125, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095158/s1sf2EAKSondNUx1gREFMQ/thumb.jpg?1430230088', key: 'DD_013', value: 221, mask: 255, dlBits: 221, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095155/ZZt_-P2ZCOh5-lOKPlSc_A/thumb.jpg?1430230088', key: 'DD_014', value: 213, mask: 255, dlBits: 213, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095156/i0YXiX26ZM4nxsHtlguyow/thumb.jpg?1430230088', key: 'DD_015', value: 85,  mask: 255, dlBits: 85,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9058113/UIuZNFr85ChQULiVJMfqIA/thumb.png?1430062652', key: 'DD_016', value: 248, mask: 255, dlBits: 248, diag: true },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9058113/UIuZNFr85ChQULiVJMfqIA/thumb.png?1430062652', key: 'DD_016', value: 240, mask: 255, dlBits: 240, diag: true },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9058113/UIuZNFr85ChQULiVJMfqIA/thumb.png?1430062652', key: 'DD_016', value: 120, mask: 255, dlBits: 120, diag: true },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095148/Jhk3vrsveDv68SHhaAZpGg/thumb.jpg?1430230085', key: 'DD_017', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095160/riUxY-QZYzkMNn-sNaRO6A/thumb.png?1430230089', key: 'DD_018', value: 255,  mask: 0,  dlBits: 255, diag: false},
    	{url: 'https://s3.amazonaws.com/files.d20.io/images/9095159/saGItYRuJagfnoA8sWgOTQ/thumb.png?1430230089', key: 'DD_019', value: 255,  mask: 0,  dlBits: 255, diag: false},
	{url: 'https://s3.amazonaws.com/files.d20.io/images/9095162/ufZrPBuv06RlmWUqAo1nnA/thumb.png?1430230089', key: 'DD_020', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095176/IxLTFVDzj_9989Pi9CfoWw/thumb.png?1430230124', key: 'DD_021', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095177/k6SjCyyGYn4k2VJgz0Bdgg/thumb.png?1430230124', key: 'DD_022', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095178/4vCYyS7V42anpnrIlqBz9Q/thumb.png?1430230125', key: 'DD_023', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095179/tAn9Nn-NpkN04GvBc0EpVQ/thumb.png?1430230125', key: 'DD_024', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095175/KDcnLbCSGdIqbwjhW3YWFw/thumb.png?1430230124', key: 'DD_025', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095169/phyJU_nUOfMoqMBYOVcXkw/thumb.png?1430230118', key: 'DD_026', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095168/y3uzp0-sZze4e0DXG9WngA/thumb.png?1430230117', key: 'DD_027', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095170/PLCKPiHuOYgWmNwMxdXr5Q/thumb.png?1430230118', key: 'DD_028', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095171/en6iRhaBXbrs51cStI7NRQ/thumb.png?1430230121', key: 'DD_029', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095172/XFQ84_n5DGvBZ5vla-eWpQ/thumb.png?1430230122', key: 'DD_030', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095173/r1OKd953-410FehDcpLqyQ/thumb.jpg?1430230122', key: 'DD_031', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095174/Z6SYJ8wsn8xzgZAPAtrAOQ/thumb.jpg?1430230123', key: 'DD_032', value: 255,  mask: 0,  dlBits: 255, diag: false}
    ];
    
     textures['Stone Floor Sewer|#31392a'] = [
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095405/9JKV6-xMcQzo2OWdsJKFrQ/thumb.jpg?1430231731', key: 'DD_001', value: 124, mask: 125, dlBits: 124, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095411/OyJjgEBleD9npoDVYzTNUg/thumb.jpg?1430231733', key: 'DD_002', value: 112, mask: 253, dlBits: 112, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095413/ozSTODJDvlXvm7LBgmBs3g/thumb.jpg?1430231734', key: 'DD_003', value: 64,  mask: 85,  dlBits: 64,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095415/epH6dTvXzYNcmMq7Ai3yTg/thumb.jpg?1430231734', key: 'DD_004', value: 0,   mask: 85,  dlBits: 0,   diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095414/rDo5g-_nD1VngewODoSkAA/thumb.jpg?1430231734', key: 'DD_005', value: 68,  mask: 85,  dlBits: 68,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095420/ayb9duln0FIH0ZNr3K4yMQ/thumb.jpg?1430231736', key: 'DD_006', value: 255, mask: 255, dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095410/s-XUwvWuh9V7nJjLnKqwZg/thumb.jpg?1430231733', key: 'DD_007', value: 116, mask: 125, dlBits: 116, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095416/p872zNlCuVfyvdgtoYqLyQ/thumb.jpg?1430231734', key: 'DD_008', value: 92,  mask: 125, dlBits: 92,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095409/nmb2jnjDzWPldaxnhFf21A/thumb.jpg?1430231733', key: 'DD_009', value: 84,  mask: 125, dlBits: 84,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095412/SxeS1lBL5yllGRxpZVxo3A/thumb.jpg?1430231734', key: 'DD_010', value: 80,  mask: 117, dlBits: 80,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095423/B7Ah3aoozq4Yhn1prFHvSQ/thumb.jpg?1430231737', key: 'DD_011', value: 253, mask: 255, dlBits: 253, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095418/LicS1vNeWZ0Zc1ddVQRAlA/thumb.jpg?1430231735', key: 'DD_012', value: 125, mask: 255, dlBits: 125, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095419/H0PhJ7zjdr4VDAaxtikSrw/thumb.jpg?1430231736', key: 'DD_013', value: 221, mask: 255, dlBits: 221, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095417/T84xr_h1ksyLIDIg7mkf1Q/thumb.jpg?1430231735', key: 'DD_014', value: 213, mask: 255, dlBits: 213, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095422/RJiKq6gYsr7GMkVk5vrgDw/thumb.jpg?1430231737', key: 'DD_015', value: 85,  mask: 255, dlBits: 85,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9058154/GEwZ4EAgnmRL0nPKUK4F0w/thumb.png?1430062732', key: 'DD_016', value: 248, mask: 255, dlBits: 248, diag: true },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9058154/GEwZ4EAgnmRL0nPKUK4F0w/thumb.png?1430062732', key: 'DD_016', value: 240, mask: 255, dlBits: 240, diag: true },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9058154/GEwZ4EAgnmRL0nPKUK4F0w/thumb.png?1430062732', key: 'DD_016', value: 120, mask: 255, dlBits: 120, diag: true },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095421/GjyoY4jxCvq2qLRXTa9M8g/thumb.jpg?1430231736', key: 'DD_017', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095426/wIHDJntcRHeLbcAJNbnn0A/thumb.png?1430231737', key: 'DD_018', value: 255,  mask: 0,  dlBits: 255, diag: false},
	{url: 'https://s3.amazonaws.com/files.d20.io/images/9095424/zo_8vbyR6Rap8PEe-TBU3w/thumb.png?1430231737', key: 'DD_019', value: 255,  mask: 0,  dlBits: 255, diag: false},
	{url: 'https://s3.amazonaws.com/files.d20.io/images/9095425/B6F3Tu0LI_Yhy3lhw2tI9A/thumb.png?1430231737', key: 'DD_020', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095433/EzRFCCdidHYmo8KRrtn12A/thumb.png?1430231740', key: 'DD_021', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095430/2SQGbQlX4ouY8h1HgqsjJA/thumb.png?1430231739', key: 'DD_022', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095432/MngJVXnb8DDz7f274GVp9Q/thumb.png?1430231740', key: 'DD_023', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095429/lqiSZ3ePdzMgYah5duRw-A/thumb.png?1430231739', key: 'DD_024', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095407/zwR74z88u1JmqiWOOSxHKA/thumb.png?1430231733', key: 'DD_025', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095408/hHthmBGyolZPCn_TbYqGJw/thumb.png?1430231733', key: 'DD_026', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095406/5AdK02lRqo-Xe_9-ZT2KKA/thumb.png?1430231731', key: 'DD_027', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095404/1Rqu9xzMxe2Spg-2ZF9pSQ/thumb.png?1430231731', key: 'DD_028', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095434/346rpghXiU-_xKnAqp2_Sw/thumb.png?1430231741', key: 'DD_029', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095431/Bip40R5GwbfEG_JY5M54xw/thumb.png?1430231739', key: 'DD_030', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095428/X0fBfHDuxfGoy21BnwRKFA/thumb.jpg?1430231738', key: 'DD_031', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095427/gQqrfzbG27RfApubhOfa0Q/thumb.jpg?1430231738', key: 'DD_032', value: 255,  mask: 0,  dlBits: 255, diag: false}
    ];
    
     textures['Stately Manor|#5D5E5E'] = [    
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095620/JmcLZUGleQbooMzbxkMIAA/thumb.jpg?1430233109', key: 'DD_001', value: 124, mask: 125, dlBits: 124, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095619/BOqqnOeNlLLQZb9PA2okcg/thumb.jpg?1430233109', key: 'DD_002', value: 112, mask: 253, dlBits: 112, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095622/Ei2o85ocqGlPUw_q6oJXEw/thumb.jpg?1430233109', key: 'DD_003', value: 64,  mask: 85,  dlBits: 64,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095623/uXy591JGBYWQXryBL8TZSQ/thumb.jpg?1430233110', key: 'DD_004', value: 0,   mask: 85,  dlBits: 0,   diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095621/0wA8MoRY3HD5jL7lnXO6aA/thumb.jpg?1430233109', key: 'DD_005', value: 68,  mask: 85,  dlBits: 68,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095626/VXyq0XrcQjA62mr64R1qyA/thumb.jpg?1430233110', key: 'DD_006', value: 255, mask: 255, dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095625/_aDRNL_O8Kg0IptHGniLTw/thumb.jpg?1430233110', key: 'DD_007', value: 116, mask: 125, dlBits: 116, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095628/w5dPJYS-KzllP4NvHcZqUg/thumb.jpg?1430233111', key: 'DD_008', value: 92,  mask: 125, dlBits: 92,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095624/S4JsCZmEhoivCIwAoFjTzg/thumb.jpg?1430233110', key: 'DD_009', value: 84,  mask: 125, dlBits: 84,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095632/8Tf5icNlF8RbT3_ElLHIKA/thumb.jpg?1430233112', key: 'DD_010', value: 80,  mask: 117, dlBits: 80,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095629/A_VxrG7yQ0tWJ3sYpFTtyQ/thumb.jpg?1430233111', key: 'DD_011', value: 253, mask: 255, dlBits: 253, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095634/ABCZIogZgrNTYBnq8Sxsbw/thumb.jpg?1430233113', key: 'DD_012', value: 125, mask: 255, dlBits: 125, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095633/sLkDhEGq_DqQldqJ2cnBdQ/thumb.jpg?1430233112', key: 'DD_013', value: 221, mask: 255, dlBits: 221, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095631/yANewhkzk_Re2elRwX4l0A/thumb.jpg?1430233112', key: 'DD_014', value: 213, mask: 255, dlBits: 213, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095630/S9C4Dt4f05SXsVJUwANb8A/thumb.jpg?1430233112', key: 'DD_015', value: 85,  mask: 255, dlBits: 85,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9058208/8dmOjkVN6cpuUbmxwGpqrg/thumb.png?1430062843', key: 'DD_016', value: 248, mask: 255, dlBits: 248, diag: true },
	{url: 'https://s3.amazonaws.com/files.d20.io/images/9058208/8dmOjkVN6cpuUbmxwGpqrg/thumb.png?1430062843', key: 'DD_016', value: 240, mask: 255, dlBits: 240, diag: true },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9058208/8dmOjkVN6cpuUbmxwGpqrg/thumb.png?1430062843', key: 'DD_016', value: 120, mask: 255, dlBits: 120, diag: true },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095636/o6li5JbxjSdosqsPfU-chQ/thumb.jpg?1430233113', key: 'DD_017', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095637/tkiWl7tAxSFt_HWLQf6KhA/thumb.jpg?1430233113', key: 'DD_018', value: 255,  mask: 0,  dlBits: 255, diag: false},
	{url: 'https://s3.amazonaws.com/files.d20.io/images/9095638/19gTxBJ5UxzfzdtsF3yk0Q/thumb.jpg?1430233114', key: 'DD_019', value: 255,  mask: 0,  dlBits: 255, diag: false},
	{url: 'https://s3.amazonaws.com/files.d20.io/images/9095635/xuCIIeTXzWxTqIL4ctfyZw/thumb.jpg?1430233113', key: 'DD_020', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095648/JGOKpm9tANyvrrzFnSCVNQ/thumb.png?1430233117', key: 'DD_021', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095644/y0aqrjbBs9K7HQ4_JUNrMw/thumb.png?1430233116', key: 'DD_022', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095649/5SUTMHRqJgOobIW10O3uFA/thumb.png?1430233118', key: 'DD_023', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095646/t9bKri9LNaCcW-D6gLARcA/thumb.png?1430233117', key: 'DD_024', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095645/yz7xpAweCpP4QqzuMstcAQ/thumb.png?1430233116', key: 'DD_025', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095642/JuxFUEeXVoydS396dOWSkQ/thumb.png?1430233115', key: 'DD_026', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095640/snXEXC3OZ8xxB55QQrmiRQ/thumb.png?1430233115', key: 'DD_027', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095643/eN1PVQMGrRNlfVNbpkFlpQ/thumb.png?1430233116', key: 'DD_028', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095650/-g64hnVmfwmSB75jYri7kg/thumb.png?1430233118', key: 'DD_029', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095647/VcvWZDFqe2cPBzXty3V02Q/thumb.png?1430233117', key: 'DD_030', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095641/Q8eedFHI0EnXQImz3IsRvw/thumb.jpg?1430233115', key: 'DD_031', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095639/jNG2baWl6ifnyXjQ_buPZA/thumb.jpg?1430233114', key: 'DD_032', value: 255,  mask: 0,  dlBits: 255, diag: false}
    ];
    
     textures['Rustic Living|#133B25'] = [    	
		{url: 'https://s3.amazonaws.com/files.d20.io/images/9095999/kFhQndSwJvRVBLSECktO6w/thumb.jpg?1430235400', key: 'DD_001', value: 124, mask: 125, dlBits: 124, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9095998/Y8dz7l9iPyGBnGnpzrzttw/thumb.jpg?1430235399', key: 'DD_002', value: 112, mask: 253, dlBits: 112, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096000/CZyBO57HdQDvc90GNM9TAg/thumb.jpg?1430235400', key: 'DD_003', value: 64,  mask: 85,  dlBits: 64,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096011/ma_sdUS0kSEG8H6005kPUQ/thumb.jpg?1430235405', key: 'DD_004', value: 0,   mask: 85,  dlBits: 0,   diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096003/rOPDUrfxSc8tHjnpdCBNAA/thumb.jpg?1430235402', key: 'DD_005', value: 68,  mask: 85,  dlBits: 68,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096014/Unjq5O2USZowyCsgdGCeRw/thumb.jpg?1430235405', key: 'DD_006', value: 255, mask: 255, dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096009/nPRed_0_XYqLfQU-jgv0ZA/thumb.jpg?1430235404', key: 'DD_007', value: 116, mask: 125, dlBits: 116, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096006/GRFrZshEsNqerXgkE8dmmA/thumb.jpg?1430235404', key: 'DD_008', value: 92,  mask: 125, dlBits: 92,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096010/RRlCE75gBvEbEjldpUBngw/thumb.jpg?1430235404', key: 'DD_009', value: 84,  mask: 125, dlBits: 84,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096008/ZfvEKqWncYmazYwKlI5XhA/thumb.jpg?1430235404', key: 'DD_010', value: 80,  mask: 117, dlBits: 80,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096002/dVPjKDWWyRTI3TuFqqmK5Q/thumb.jpg?1430235402', key: 'DD_011', value: 253, mask: 255, dlBits: 253, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096004/A3hCN0T1IKJhUi4472iBwg/thumb.jpg?1430235402', key: 'DD_012', value: 125, mask: 255, dlBits: 125, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096015/vRIYsI7BnzcQrA1-udvw2Q/thumb.jpg?1430235405', key: 'DD_013', value: 221, mask: 255, dlBits: 221, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096007/zPq6InOz6faSsVxWjSC-fw/thumb.jpg?1430235404', key: 'DD_014', value: 213, mask: 255, dlBits: 213, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096001/WzIapXIYOQ63mwe5DASfBw/thumb.jpg?1430235402', key: 'DD_015', value: 85,  mask: 255, dlBits: 85,  diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9058250/inTUUa4pK8lZ4JI9GCiamg/thumb.png?1430062874', key: 'DD_016', value: 248, mask: 255, dlBits: 248, diag: true },
	{url: 'https://s3.amazonaws.com/files.d20.io/images/9058250/inTUUa4pK8lZ4JI9GCiamg/thumb.png?1430062874', key: 'DD_016', value: 240, mask: 255, dlBits: 240, diag: true },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9058250/inTUUa4pK8lZ4JI9GCiamg/thumb.png?1430062874', key: 'DD_016', value: 120, mask: 255, dlBits: 120, diag: true },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096013/x8_CiRdN2ompU8W0lXVkcg/thumb.jpg?1430235405', key: 'DD_017', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096012/_TBgGCpIwxmOSLLvNffIEQ/thumb.jpg?1430235405', key: 'DD_018', value: 255,  mask: 0,  dlBits: 255, diag: false},
	{url: 'https://s3.amazonaws.com/files.d20.io/images/9096019/J_OH3ztBOdkoKZcjYdOQhw/thumb.jpg?1430235407', key: 'DD_019', value: 255,  mask: 0,  dlBits: 255, diag: false},
	{url: 'https://s3.amazonaws.com/files.d20.io/images/9096017/S1ypLUTJqhOGPUo7SOq-zQ/thumb.jpg?1430235407', key: 'DD_020', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096028/facuhVd4jNwIeMJQzg50cg/thumb.png?1430235410', key: 'DD_021', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096026/Vu-3rdIO4XQnUepeqd_Dyw/thumb.png?1430235409', key: 'DD_022', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096030/BS8f0Tm033VTn-Nm1DCmqA/thumb.png?1430235411', key: 'DD_023', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096022/CK7IUnuHWsiJkF73bFda5A/thumb.png?1430235408', key: 'DD_024', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096027/LLRVvt50o8l23rJu0EAK-w/thumb.png?1430235410', key: 'DD_025', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096029/Qd47LLnO1IWX8LcLD5zrvQ/thumb.png?1430235410', key: 'DD_026', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096018/KNarkWJ5aoyXuSR_sTfuaw/thumb.png?1430235407', key: 'DD_027', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096025/TOrzubMJzfmya1AoIuMXmQ/thumb.png?1430235409', key: 'DD_028', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096023/SY91DMBVkNwsmRisiLGvAA/thumb.png?1430235408', key: 'DD_029', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096021/7nehOO9gW01DU0NT7YYfYg/thumb.png?1430235408', key: 'DD_030', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096020/ohIufR9fJmhLW9AtLD3apQ/thumb.jpg?1430235407', key: 'DD_031', value: 255,  mask: 0,  dlBits: 255, diag: false},
        {url: 'https://s3.amazonaws.com/files.d20.io/images/9096016/ea_HFKecD5C-ajIhojTIog/thumb.jpg?1430235406', key: 'DD_032', value: 255,  mask: 0,  dlBits: 255, diag: false}
    ];
    
    return textures;
}());

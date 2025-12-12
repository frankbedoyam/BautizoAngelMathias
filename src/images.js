const images = [
  // No es IMG_####; lo dejamos al inicio para conservarlo en la galería
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478967/MathiasPulpito7dic25_zy5bna.jpg", width: 3865, height: 2791 },

  // Ordenado manualmente por número en IMG_####
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478967/IMG_0570_mdytob.jpg", width: 4608, height: 3456 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478977/IMG_0571_qnqpb1.jpg", width: 3998, height: 3170 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478977/IMG_0573_gwaoec.jpg", width: 3672, height: 2439 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478977/IMG_0588_bbcxiv.jpg", width: 2527, height: 2821 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765484235/IMG_0598_gasitn.jpg", width: 4608, height: 3456 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478977/IMG_0598_v47sei.jpg", width: 4608, height: 3456 },

  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765553012/IMG_0602_y0nzcq.jpg", width: 4608, height: 3456 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478977/IMG_0606_zgdyjq.jpg", width: 3747, height: 2986 },

  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478978/IMG_0620_p3mmov.jpg", width: 3469, height: 3306 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478978/IMG_0623_cfzx0t.jpg", width: 3893, height: 3355 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478978/IMG_0628_ass5ef.jpg", width: 2513, height: 2228 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478978/IMG_0630_fegpcu.jpg", width: 2700, height: 3221 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478978/IMG_0633_akrrss.jpg", width: 2516, height: 2439 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478980/IMG_0635_yfvrbs.jpg", width: 1960, height: 2741 },

  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478991/IMG_0641_vvmnl8.jpg", width: 3390, height: 3086 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478991/IMG_0642_mkeeud.jpg", width: 2601, height: 3031 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478991/IMG_0646_dj0nap.jpg", width: 3425, height: 3603 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478992/IMG_0649_laodwe.jpg", width: 2341, height: 2891 },

  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478991/IMG_0652_o48xta.jpg", width: 2834, height: 3021 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478992/IMG_0653_irdtk4.jpg", width: 2923, height: 2266 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478992/IMG_0655_qwa8ln.jpg", width: 3241, height: 3048 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478992/IMG_0656_htbilp.jpg", width: 3456, height: 4069 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478992/IMG_0657_wet08z.jpg", width: 2928, height: 2851 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478992/IMG_0658_bh7vb2.jpg", width: 2231, height: 2892 },

  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478998/IMG_0665_stxkc1.jpg", width: 2007, height: 2378 },

  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765479009/IMG_0675_klpxsp.jpg", width: 2934, height: 3036 },

  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478949/IMG_0689_i4uqoq.jpg", width: 3630, height: 3456 },

  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478949/IMG_0696_y0xxnf.jpg", width: 2426, height: 2623 },

  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478949/IMG_0700_wdivng.jpg", width: 2851, height: 2387 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478949/IMG_0709_goc5ec.jpg", width: 2225, height: 2981 },

  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478949/IMG_0721_extcst.jpg", width: 2844, height: 3870 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478950/IMG_0721a_s2ivxm.jpg", width: 2681, height: 1746 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478949/IMG_0726_xmujd7.jpg", width: 3400, height: 3456 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478950/IMG_0728_iatphx.jpg", width: 3189, height: 2832 },

  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478950/IMG_0731_n9jix0.jpg", width: 3137, height: 2459 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478950/IMG_0733_omo0z3.jpg", width: 2879, height: 2857 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478950/IMG_0734_rjqefv.jpg", width: 2981, height: 3175 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478951/IMG_0736_ivh5vc.jpg", width: 3075, height: 2853 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478951/IMG_0739_dypwzm.jpg", width: 3463, height: 3342 },

  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478951/IMG_0742_havet1.jpg", width: 3354, height: 3456 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478951/IMG_0745_uozcbu.jpg", width: 3174, height: 3456 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478951/IMG_0747_ifrbyw.jpg", width: 2049, height: 1997 },

  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478951/IMG_0750_gp5djz.jpg", width: 2655, height: 2423 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478952/IMG_0753_ns5pas.jpg", width: 2320, height: 2967 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478952/IMG_0754_x4bs9p.jpg", width: 1996, height: 2486 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478952/IMG_0757_xycfbf.jpg", width: 2439, height: 2967 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478952/IMG_0759_j9ordj.jpg", width: 3213, height: 2745 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478952/IMG_0760_xzi452.jpg", width: 2321, height: 3602 },

  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478966/IMG_0762_h6jabh.jpg", width: 2647, height: 3971 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478966/IMG_0765_uvpz3w.jpg", width: 3163, height: 4365 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478966/IMG_0769_d1s6wd.jpg", width: 3448, height: 3730 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478966/IMG_0770_fbs9w9.jpg", width: 2459, height: 3275 },
  { src: "https://res.cloudinary.com/djsj5zpq3/image/upload/v1765478967/IMG_0772_iwgfuh.jpg", width: 2679, height: 3737 }
];

export default images;
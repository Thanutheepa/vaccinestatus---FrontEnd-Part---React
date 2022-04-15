import React, {useState} from 'react';
import {Link} from 'react-router-dom';


function Nav() {
  const [user, setUser] = useState({name:"", email:""});
  const Logout =() =>{
    setUser({name:"", email:""});
  }

  return (
    <div>
        <nav >
            
                {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEX
                ///95eHjmHiV4eHh5d3d4d3fkAAB1dHRubW1ycXFsa2v5+fn8/Pz4+Ph/fn719fXT09PlGCDm5uaZmJjs7Oz
                d3d2Ih4fHx8flABDf39+ioaHlEhuysrKOjY2Eg4PAwMCura2cm5v4z9DlCRWTkpKmpaXqV1vsaWzFxMS4uLj
                Pzs799PT63t/wj5H51tf3xsftd3rxmJrpSU3yo6X75ebvh4roOD3rYGT1tbboQEXpTlL2v8DugYP0sbPnKS
                /tcXTyoKIO2APoAAAgAElEQVR4nO09CVsaO9cOSSYZpOwiggoW1KKtta21dam3//9XfUnOyTpBh8W27/N57
                n0qA8OQk7MvSXZ23uAN3uAN3uAN3uAN3uAN3uAN3uAN3mBr8K5/0N5fHCJMLtp73dbfHtOWoLX3YdprFnUh
                Cg1c/qdASMjmp5N2/2+PcANotRdzJjHjnLEsI1kA6pJxia0ojqYX/4NovmufNiXVOKMkQEoBDXFVeIpstP+
                /xLXdxaCukDMIRSiVgUo0i3rz8OBvj7wSdA8l8bhFioW8qS6JJWvIuawQ/HTvb4//BWhNjkVhkHqRdGVgXL
                Bp929jsRz2evWCvYxGCPE8SCSP9xt/G5UUND40BS+Nn5TeqULJopj+c9r13WGxnHxyxOavhpfpLEXy5J9i1t
                ZUpIdNlJIUg8VBobQMbbfbe3t7B8o8Wg0rlW6gjhTV5UeE13v/DI67h8LqTur9qwbLmqdtaeh2hSIMwy/4GB
                WTabZkeiSO/wavToDtAokzF6yAe/oaQ47fAAyJvaG7UAYGHkLgE/jDxem7v4WWhXaGBECkmHbHFBtSbcjhrg
                PhobvTdN/gJ/BWf3IkkSwpVsrF5K+gZaE/F9RYdYocKgWv2aTArAbDdhFjiBNSXNhntfbndQ4E1LMEE8aK5t/
                0dBaefYAhcyF6H/pAMz1MuPGDVqYCv9Z0YicCLuyfiJJEEiZO/zBaFrrHBY0sNl/ghJ+ifWjC5SLA8NiiwefR
                M9sppVPwv+PLLRIGnk/xw4ZWHBk7hstTfWsdP3QYFh/ip3bLVJSP+RtkbB0VwJehchBt/Lyt+ZQN4KoXY4hBl
                cCQac+JIzB0iYzNP2042kBAWo4PTJh3om7gR3BxpA2mwXBgrIWZgJ1e3dmFZslj14qnvv/nsJMwraPC164JpT
                YUtDjttJREGTlrai8mxFBRZoHvFFJncpwbJbM0wA45dfTn8Ns98jiJRn/tqPcln/KewUBzaSPCUCDraWNiTKP
                RwzEVs2Lwp9IAfWZVjEaLMZWJYco2UPm3buzXEWc46l0hHQFGDYZH0rQTyqymlYpIfY6WpSWYNKSUMsqItIzy
                H3kzVezC+Z/xVNta26FJlzhJAz/vDQrpkYALzTJEpC8YH5lXEqGsvmsxVLeR4hAfKUks2R3x3ZUsS/TnyjEgKA
                5EiTyrt3deHz6gCKo0DJPmeAAppEb7yGBuWFNKFActj4wnEMM51zcSgdSGj43MtoQVP0VYAl6qxFTRuf76Ttx
                hnTnJY0XmTepFocdDMmHU3nEx1X+1nBHrwMzBObOxxpSrSyPAfcCQSPYggKTmDElY+R+rH+68LpwK/duaiIRG
                hrifcTUgqfZQg3RxPPuFljNj/eZcDpUQbr6t/VRqKNpWhpYiW8r/5DcZklSh+crGfyT9NCn34BbTeuyRtLhSEJ
                Lh0JXZmQKGygAwZ9/B/jOBvlhXANOb7/CEhqZaJuXsUlq8ptU4KTzlTcVF6YauDjVYVuBENyY4aKq+E2FoQg1
                wWgsjYeCXM42cdH0IgTiDmlxkVpy8GoKjAgyCVhPO8O14mbFJATMQKr0TMC8GwxOldjNuaNFUDg83QtkFdw8C
                LGrn05l+wl6NiqcF9fiGG49r0hTMif8AkHHem4IjHhh4QNiGhvvSZxPM+J1TdAcdXvjaKw+8EoqHAgQCHW6jG
                I6k+ZJhKhoCqfmJngPrvSloAs8ZDEfaHhrboaBro9yGtDkyiMag2pNHEzXrd1BHbxcmAn4NPS7jj0wLyIwZ3W
                Lo5THxzg7XjM0Ml+pYiqelST5PGtQ29yIzzTlU/zTYD3khFslvbwLtOrUSr/7hyJgFpGSsbpGWgeosBK1bF6s
                hMAEw7/Xm86MjrUtYshCzJ0moOHxXR/tEm3vlvSnnhuiQi0CSauuhRrfOAq4xUrRbN+8Yd1QZbLCX1nubmMCd
                A2iGo7oQE3lhB+pOcBgkGdVjFFqax3ViC0IZNamsvt24v8WZx6Lqdwr8AfkBcI6N9YS5SWn13fa0KYpQUThgv
                ChOLlyqZqK+a5y+xsiG+9p7876m3ym2GhMPeCT3WYGzP7WBlECuLJgZTHGqUoSMuJnRHh81mVEGSIr5ZK+/u9
                ufNAvloVkrstPWDpLGZiA4g3ibGD+ON1MjXRNOC4hymf4DEQUaaBnrMBizybkoScp0AJRxzty8G0VlEquoQpR
                MF0KoQj+D53NuePei0Ngof/tgriZLxmlchV3yNuY8/M3hQtkJ6hklOZP28R+EZlJppED2tRxqE6aw9KWXUdD6
                lDp6MgIKjFmFqey8GGkRbilDJJ9R1zLfn5wMjo+m0u0gynOUY9iaQu0LhiOizGoRJown0yvUhMqJBluwb6TOZ
                vYz4EwVGXiAWCn8TbaHmNsJkFF6d8oHjnKJc0BRMW99S8niY3SFaZBcs36ksvlepuiI26ESO3ClUlRXRrM5GA
                yOm5m6KDhSmFgEIerV8a44aVyg/zaIInulFKBSzvjuzhbA6RJnKxT/ceuOTpXXhbKjDJphSmoUpmDzw/29vlO
                ajVa3PRkdC6j422IbdSxNeQbhr/IUwlribhO7AQjbiige1LM0cBeotfbMEBqg6DAuoGD0lrbL7O4tjupQQDQy
                ioyrCKpiSP0/5aoE6cj1oSAM8htMbMHw+46M5jaog8krkUiaHPl5cMZFc/FS8mj3oqeqThEQIxE6FaWEYGAxn
                Jh0iUZx4/zbtHC5S1Zko8VkMWqCxWMiHn3jiLvqp6rGV8uN7e5Lc+cpJr/JiEFk4SVLp4KhPlITUKp8rApQRg
                CJ4iYp0+MGhxCDbpNDZKd0p2iu0lHRHdU5s7GDzZMAxnIuXXg2EsRkpxR5SSIOXwkGrmpZGKlu1a0yCcTgsK5
                tvzYd4njVvF/rVGD/GzXmRCVmiHqgl2GbF1pClZ6WH6pb+UatKfsu/+xyBx8KqxWoOEJMWhNmda4MF6vi9+vu
                x+8bg+Oo7skj+rsKEUem3eNCi6VSM+gdkWKT1BTWyJRycwGgpCtodh3DccF7h4vpkdA+pb69VJn++Xh2WztP/
                sKP4XiYn1/iVXcgmFfjVxyvUpbWrqtkHoHJBd2nUlOkvoEL7kyhTRAqF0c/X8rGHDJKUr9yOxWEiV6k3r7ns3
                Fn/JT8hW/DWq02yz+a633U1AzlUHqf3P5yV3lxlKArb/VRkE5YDVqCUMz/moi9cdCH1JiSjYadcKMjlBddkvx
                PucQif8Crxs/H60/vzWeX6rNa/sv95tyLmZT/1rTztaeDYsWhJsYkYHrF2qHiyIqFyfx9kO6W1j1QQTgQpn8Gm
                EbGhEcJ+/Qlr40Nk17l+Ww2zO8MY951arPhN//uSd0p1awYWD2yj+UELtjJ9HSgCpjoqbPjnfWgX49LZhf4I9
                TIRo97KEoBWZJz/5Xnn/Hl2VgRrTY7g8vGrJZfR8qwK+2SCtJUQ5VL5izgt5mYw09L3Wvd2nUtxgm3vI5SyBmK
                iDGEeyZlobkqlSMGGOZX+Oq/mcZwfA+XD/nwU+luU58kWWGtkbTzlCq96uzTBVS0lAleLxjuC+dowxO6wgiISZ
                Y2Cj85VSRcGODGr5aGN1rwajlK4tm4k/rtkUnsmcyyyrYrfgw8xX2BqaqkA/kyaCnEJFkvwFCiY0p/TeRPHQy
                URfDbOAdE8t/mrQetd37Cxcc8lEELhwL8GQgBGwMgKrW9HgA9jv7PWpLYciS0YQRnRmUa1XNsu7l5s9SCdlPL
                O7km4tfZvX33fFzLDVr34/wy/hbAQoDrphJOrSYnUJuJ/GzlXekQmq6jTqeef2GSQ/t1m2VCM2sdbY5Z76sr94
                j/JLmAhred3HguOw/D8Q98+Tvv3C37/YlAnzQ7oKpo1xwwYi3fxWikUTrlGF2u44AL5pSIzRQujEuKNGwZvuUZ
                UPBTnjvNeHMvaahfPXXGqDwvb37PjFD+8qyI/iwYwAKKboQVECWpojnIRjcTnGsJ7aoGAW2PV3dsgsYdZtvP2
                rzQkofmA++iDFtFznOrQ2DMt3ApPZfZ3f3d0yyX5lBq0rPvPz/eXEsS+xg+5GcBjtg5BrwqVehhAb+q80ZIz6
                bRdJGEVoBjZp6u7aGthTamahGMQHbBHjwTKZ4PPedFw8dcsuHlozIRHQk1hLE0+rl+86u799NwVrvxv6yjNMj
                o69pbE5zsQ10zB3U+4lQXTuUQVkRQeiuoI9HiuI9ak94cXWvMFWWQ7tv5rNTkUHpgN4+3X/DuL/n1j3xWWwq5
                S058mtUi29E0cTEogm5d14nBWwb3HlxINc6yt/g8nDprD906qRClwfUsEFPr+qgI03mS8jXroDPd+D4bj5fjJ
                5nXGfyv4zy/D36gLzCBg0JxqIsV3TonXIC3c1gYPltV1xR2MRbBNEIi+ypZRBX1ba1UatL33/PxVxUvDLXFe+
                g8Qz6A4R0GFl/yu8830S+0sfMEBZBBJn/v2IalJ1bjx5bkBWiXGgSJKLmcHwR0XgTlXqkvtLTNJJvenOWdlxC
                UophfKwXzMz+7eogxNNoGXA6JTpQ+bHgt2MVKrTYn3Ethokkv5uEkXYDnW0rofdJkG19LojzLnx6nStn9lj+d
                58P8Oh4JpIhZoWyQ9LJkNHURtg24MHEQf/c5EH4tzIQPPJglldMjKVv7U3uendu7YTX8NKs+DWfXamaG99HT9
                upOj/QLUdQHCzfRLYgYKWTXV2HTtpdCRCbVbmLBF2BYG+0BtDklEpaXd4BiBQb1WLVz/1vTPv8ePQ7cY4we9v
                aCX1P1BrvAkZQbjpfDaZCh9WuThWj2Rr2BXQNCioQG+pWvghzC7R1MSeyovoOfShiDdwMejG4VbcqZLR+4f6U
                DpRPpKoXAIH9AiW8oHTytRD9DRvhjwg4JDY0stOhE+kzCHg8QVNW2ynnFbqKH1SxjISFRi2Td4L+KKiYFLpy6
                7ED+Bhpc+HEwfr1wQddtiPX+i8oBxiTVTO5Lps10hcH1JY7h4zpcaijpgpDvw5r20ffRYnjN7P1TgalqXyVW
                77KZl5cZQKnLVMKwcEJD6bjMIRS6XE3JhPjdOsd9qDhXvdAzqlzPU52i6U5UmQPww5o0gcxb1TgYzWisTj1
                iEvvS/96PGQQS92vzaOfMe9wXZW20H//BWD0uBNPr3z3k8D/9WlRcB2Zbyam3jE4nJ6lOpxPL+YGBfC+jP
                RXaPq5gB2NwaubqTLP67BqnnBBM8TOrCTzUdPWfVBbESeHoZ2owkJpkpi3KBE3+nP0YzpRP8nMDIbS24v1Z
                rkLJHLOQU45oETPd4V+Dcsp0pWCUsobA9loQGVbQvM4XBZ9/fPp2nz9toEZrKjZWT7rLx/ndg9Od/XrGQiV
                Og8GZP1UtYsY8O+h1J/jkg3ijzBQ/X4wlXoDh+flT3hmPgzjardCwPJnosSJZ2jqX4F3SGobPBIx5+cs3G/
                GopuK4U5vdR47NB/ARMTELLAmtp54Q0aquKXSIOnRCxUpMFYYmUyPXm9JQIxm73y7j9dy0Z1Vt/n5y8Ri1n
                RKZKRdoJn2vDMTnXzjnlxuTUEJnXO6SOYpMtHOwAkpUixFtopR5HJkxgyBTYT1R3VgqoXiTSwV/nedjQPH3
                BpbCwvBneVALM+3UcKlnr22LnN8B8wwkPZoE6HD7cVbLv6isILgz63szHuSJQWlX2ZO5ZWOqVCxtMks++zD
                n3YK8KwOrOUKqhRrEdcphXitsKmP4MTEqzsr4REDSyq8EjSWbOpimIYpdurqf1FOd+dXP+60gWBt+SQxrzk
                nZPpRBVGh0W6K2mCOn6Wpt6ChibEQvH25m7C10bhPDWrjFLOitRf4NYlghud/VORpKrG8b8L3tFWW6lnGZ5
                //pcllnS9hpSNWjytk/Cz6qVWpQ7WK5KPvzBWpLhYRn+TC/u66SOKyK4UN5WP2AtRxDuZK/nv0qme/9RLNl
                iB/YIs/0/PomdcPVbGsozuJslAJhf52UzIWDKgZxUiRZnPlNtOqzIi4s36yVnUlBx/k0LkXcJIGJ11ca4Ap
                LLLzC8sTDkOGXKjBR6kC+2o4qlTDDJ/6c5V9NhOGbaV/rhcArrIiapg0+JahPjS0pa63tYYiq5reU7eEjPn
                0Evc8EwlSfRT1RrJRRPOWgiSMuZxl22RNssCxbnoft0fDTpao65h62O4c8wsng5akH6qrVz4CNf+NZijAuV
                yR/bcMpRRTzpyesOpqSOBhEspxB9btVMDzh/pe9qEm3ptvMiF0B6uDL9jD0igImf2pTnFFI4cJh7YtUcExdR
                c4RkZbe8T1AY58ftxEbIsxyU7gaYlefTbi5NQ4BLclKNHzGe7cY2oTB7/yHxvHydos2//vnh/Owe2rf0dC5W
                6GvSrJKcniyxIun4UtHw+vZOD87P6tt0akBukGtdbjj09AlMEIwVKmGYZpmjhUUjszJ4fWs1smlZuhsTwxRu
                3ysDTu5qfOjHBI/r2jwJTbkr6xLE2waUZZYXfptOLy7gRdbwxAbqxqfvloHziumRGnSoPxXAcPI4ntZb0Ywt
                NAzZktZlzl2/XzensUv1fOtPYQShVve7WudzFtS9wwcpsMUG01RdCpc4s7o0k1KThGGiULgKbeJRGQx8HCwNxKR
                rJKoSZXWMOr16hiUlBbM7DS2hWEyBO5xnzlJwJtGPEml5q99102WAoYkzEqxhepA3A6G4/8S42qylBKlkQdQpX
                LhBdMsC/jcLx2QxEZkWzP5ya5a3MnghWRNuiYdgldb86cKt7zKqEmCJ/jh55aUaSrZ1hehp0zLqNI0ZyUftRy
                8vuGyB7il8KkzTgzLsJYtOqXEiGZl7VCGZdlEZBC7aCeRmrzbjhzOHhPDmrikd3rG9QWtVJqJbbsFlxSGtFYc
                An/fEpN27q/Ko+qlXK0Sp1brMo2y+ktFOxbqrYX4nWF+++vm6jzIDDOXho+oSPyIp9LCiyVpDC8pjHsahCmR
                reXaOnffn1R9ezz74Z7edxuAxVPvI1xt5bPr8I7iabu1CBoP3Yhx+QCh06ethRbKZbv6MQyaa+WgXHcWrBjC
                jc48Yiq+qrQT2F4RSWIqbWoKF6o5//rbt/N8OBsOt0LFGZh7VdTyeuKXFsSoGZMeVrVW6Nay5enmmaaTRfsP
                qjl7OJTR0/Xvb99v880piZmnxmzoLcXYFY5iHuFKOqKKsdjRQp1IW6iCE2x8l+kNIFCsYZHPI9roy8uvGxYw
                rHr5+NULMC5iZ9n62l4qEatFFaBnev58/HQFUS9iplYi1Iwpd9sPdjZsVeikl5rOzYLr4F+SEUNYnUIlVduE
                k417ZZriKo5Pw3B93feNnFO7xi0AJzgYz2ceYvGAKsBeogca2MLr06G24npbC1hjI7M4/pEcEezZF2edLI7EB
                IlV11ws8dts11Bmtu6On/j54eHh2+0mtfxhIrjf0W6Wl5fxEVy9Pqohbu3IXMewM0Ha6AftjmfKTg87w6e1+XT
                8NTkerWcSwVNQwaVVPRoFC8+PDyps1hRih2Cw7A97aaRU/rcmow7vMfUawYCVDAMx7OQv/K7Wa6LgQIQyHOtVh
                3+gvMDxVvnN9VDMP+2cD/NZ7X00nLbwaOWlL4AA1I2tSnCIEB4GYBgUtr1V287g3rdqAa5HRB1bgK64XgNFlbt
                QfJDHrRjHrJTaTvZl0Hr1HYcSWWG9xRHu7ae21oGKLAsaj1XnJQZ3a6H49EmGmOM4DXUhiE37whamUPolUASG7
                T/VZ6vsrXBRZCXOj2bRgB9DXd7mY9NlsE7OppN/v85vY0lkJMg1LRsWWWnhU0OUHqcP36JgeRhskww2sfBZ49u
                P3/hqLd+mU7v5Hvtdh4U/krBt0vuE+Ft3VIBERO2CQ3MB7yypnK9l+BMGvy+cbtEaD2e5RMpKhTUHJU/XdGE4v
                8YKe3qLxve6j6iS8R/ntq2qnGQbuAWGAd3KhFxtdZ51a7wHmZS6fmFXXijbmHLoJYad/Oz+5Whqll9fYdNmXs6
                T2q7LSBRDdPW/KzEpVKAq1Ek1JFMHv4bjsfSiP399Hsdx/p9y1PR+IIkc24FILv1IjWzVXWr24rwItqiWK9+ZW
                XQcwtkQN2h5/1zECPipok6ez4a/4oc0bP7JxfLx7xvGWnWls38WTGLuGLPXSvDL+xd+zG8t7y63Gy4T07hpfMp
                LRbWSg5yljT1ZY7W6HyQmNJdrldMpuPLSua/eaIGGw9wolPEwxz6EEKWvsyj8nS4PVEuw+o4DjbpHxBLfu55ha
                CjmzVDbPLp9kS5hGVT+5fLjF21BhmcPD1cfdR/CLPjSVd6ZXXttiZNn6wtu4vXo1tgO61QlDjwsYWdK5ZTijqw
                U2+Z0yTRwwd9/za3rdQPL8SEPoIwk5tJ2fue4Ms3BU0dqVhtAXdSf8aoQPVsNW2fnj36ccvObh3zEAQqnyn5IW
                li1eKcRNDXP77Pa0FBbOurDnQBUc6PdyKZtmIiw0giMwXBx8FqbYfWCthMWkDPEEfYCsSje5845waDRpF8ucy/
                N62/pgvd2cjM1sCWVH9QvpShddy+s1HkvWVImcd9Yuy3XY+5ynfdKvTh2vMtd1eUhz4OVFZdS/5g39uvE40GgF
                4XAAic183uj1twKC/PMmD6wmSDiRdiGwBp1t7Xa1aN1vxrXee5ZhXO/CSGPbPxPq2YW4blWpPRvCGvuhKX2Zg1
                yGCaJAdtOg+9GcameThcnt8LSmynZHOG5L3rns1ri9h23ERaSTMU12uMgpnxJjRBCGWXt/S/jYgGNmZSZ3I3Z1
                ze5F/xN7prvb/367rdhqnFmpzUogql1SZQlorguCdU2KV5qRO/biz439nZo35uZeEN3aaSOnfo+s2i9z/3w4ee
                wEy/D21H1bE6deiEEY3rYaCeDeFifkpSZhRfr7WWmwVtNSjDxSoyRN0tzGZIQ5JQWJPbg1G5Q+PJjHvTKfJlJz
                zvekO60bj1CEq2lDMILl4/aYGdI2FkDuVBtWcwy87MEF+UTE0jBFCs6i2nwDJWxMT7113w8dommhlo0VQtR3Mt
                8Tw02nDN7zhIvKrV5GnUI1CbnXAXhGcqaZlZim9pB+k0WXN0SHJGkm92Mtbh6PDt7tKKnO/3G/lYfLTjzIaAYs
                bR0uHk3kErt+c+AO1ATZ0/ng0nEJ4Z8OCAqjuy03jyp3UvzOAeq4FztznrmHNGGPlERn81QVTKTWDMks1KpTxC
                QNxSbHcYq40SkHjqp8hf0fvkEdDbU21S/KW52D8C9TcY/P97fX6cyme9//PjlFE1j4s5eISiIZptP4p5Msow5O
                mdZtvGO3kbZoCojIYf4zmqY8+Nivoqr2FJnQscmglhBdE4osoul7Go7C6Wg4bxTrWzMr1NkXOb/dFBK4KI5qch
                Aeyf16ExhcxV62G5y8dfJRpsII7SF92C7Y1FGzVrSYLVwWO5ghehdvIjkwZSJaI8Di5FdJEiMdSKZsb/axVktw
                bYERtwQjRI7vdTux5yh05asOapTA44Wy89o6O+PuPBiGGf6rK52khF7pmSjTZI9aBicUK9kOgjWJ9wQOFSEUdO
                7GMoibC6lTiAZTPf3QnZqdS8WvQIOqyamPd0Q0AUU+IyMGf2J74GOLWdP1oMDQVzOgPizGLxiJHonpKXEMxvMe
                yejk5P5oIkHXMQPiS5KH0QP33THeQsLEMUgr4+/Rkvhondn/Jk+JkYfh0RSPB2vBii9Mrrb4LrRbuwhzCFnoze
                oobBDDdS0CEZPMGQ/hEwgXAmC/lG/S8+uuLJhBl93k+sENJpMn8JAnIBAmZQa7lW+nCmKEzsMK2GEeVqfkhBpc
                7/WZxQLlMR9HWSQmmZ1Zo4M3JIQAuhNURkcpKOdbQr722cMy8x6A3wSGosVKPf8vd68em9t+dCuvWRqjy4Z2lK
                JcldheSAVIFk3ymLnOxiZWGGHvUowUacWMLT1mT5RSlMTN/9UJ05Q3EA8gVVp8KFqdG3pJkXrmQ5KAlcRX77C+
                YBToc/M0FJC9EmpTJ/vSs0BRtobt3aFWifOZiCIqe14KyecX4tvMHQ9iXFLCWwcY+OLTJvlYnvndTkYFXaOnTX
                w7YLnSy4BE2fZbc6t/0XjGy22bnpQKtSr7fgyJZgXmHBTFXymXRp9VAi1+pK4Orv9x+hP4nsrJPjQxgvU+J8eO
                xrX120+t42AYgkc4d67xNl8MIG4japPhcAirKJWLXgU9Ey++ieuA20VRW8EQZ8ZCQInEt8WXNB4OUjSUfPLJNQ
                jLH1NBBWKEM6Y88DtRFPTPpxE7DkolVtCKL/Hj7dy2Noy6BWZryOMtiRW4fsa3UpYuave5MoyUI2eQ2ZMn3YRX
                Uhh027eqSWvAyN13CE2tqF2USfoggGwuUcaouuijjITxvMSv+sMvv7BYtMzul6GQ++kG/2zLmqyNi4OC4hxpd3
                bNPhKgvTo73obCikKpnLqW4cPWNmjxjpT1Kj2wEPPLBjLEMfpmTHshHhfMhRziwWIyV1ABvPVz44H2CvgAFk89
                M0FHNSMBN6ImKzkxLrvmWShfZTNeOH/oEvZ1iLel6DfLLI4hi074c8ZQX99ZHxfqcJlppGzTdL3K0IPTg8zjgi
                DJDXztSaxJEFuDL0Y74rY2fHyNZnxSoFFJRRHr2olYpiIiIZRx5SlRnW6lm/0beGfEkEH3SaeYhc43C7XZoUwj
                ujDKUi6M/gchklfRUHOtxvvVoJRXXvgZkwp8tB43OYt4t0QvoD7rL7Ck4VF749yqIE2LzKzko1A8oQZorq/xlV
                Jx/3mlMOgl8VYdy2KMqxOnFb3h6AhyZhMdT8jcCbSi2xg4svmbSZONqufbQQHzbDV1htsJHtlix/cBQWRhGpiR
                fYXJNCHCZx0m8peJxBZQqhlX1MnAW/r7O31oXVa51CO1aYaSt4UXBXYLsS2anoOLYYn1Hmdxg+0oYtqeayPtpk
                TXRv68zpPC5SlXhWPx+Q/bOqHi/kfdGKeh+5ccNCkmFcj/pADhCJcTfcDMqV7rfDb0qSw57oAAAESSURBVMnp2
                4Fur86Zv+1CQI0EzUo09FxVdXhlvffP0M9A/7ReMFc2gd140Tklnjk0usVU6JHY4PpAoZUV9dPNi9evAI1JU3C
                2zEOz5HzhBnVc+eSVExUbwMEp1j2BiuiS0oADAZFSfASU5kVx+k+JXxka7Z7ACDkmXhI83FU9vNf+d8nnoNEec
                YVlwsGxtiNM2hBd7eej/wn0ELqTObYhxPSyWSa4ItDLUMwX/5zufBkOJqOsrs6DZFCgMp2h2KmpqlXQwHAyOfg
                fIl4E7w72p3PovFDnkxtQV/K95ny6f/AXA4ctQqvb3p8spqejEwmj0+list/u/hMu5xu8wRu8wRu8wRu8wRu8w
                Ru8wRv8f4H/AwI62CttqmYjAAAAAElFTkSuQmCC" width={60}></img> */}
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCMyhpE4IwxdYYjQTJJIN3WX4aK0v9a5Q2w&usqp=CAU"
            width={100}></img>
              
            <ul className="nav-Links">
              <Link to='/Organizations'>
              <li>Organizations</li>
              </Link>
              <Link to='/CheckedInAndCheckedOut'>
              <li>CheckedInAndCheckedOut</li>
              </Link>
              <Link to='/MedicalInstitute'>
              <li>MedicalInstitute</li>
              </Link>
              <Link to='/User'>
              <li>User</li>
              </Link>
              {/* <Link href="/" style={{ color: "white" }}>
                     <Button color="inherit" onClick={auth.logout}>
                        Logout
                     </Button>
                  </Link> */}
            </ul>
            <button className='logout' onClick={Logout}>Logout</button>   
          </nav>
    </div>
  )
}

export default Nav;
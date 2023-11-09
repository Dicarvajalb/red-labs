

export default function PreviusPageButton({handleBack}) {

    return (
    <div className="flex lg:ms-10 flex-row items-center gap-4 ">
        <svg onClick={handleBack} className={'hover:cursor-pointer button_back z-10 w-[5rem] lg:w-auto'} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50.0001 0.628906C22.7471 0.628906 0.628662 22.7473 0.628662 50.0003C0.628662 77.2533 22.7471 99.3717 50.0001 99.3717C77.2531 99.3717 99.3715 77.2533 99.3715 50.0003C99.3715 22.7473 77.2531 0.628906 50.0001 0.628906ZM67.2801 53.7032H41.6563L50.1482 62.1951C51.58 63.6268 51.58 65.9967 50.1482 67.4284C49.4076 68.169 48.4696 68.5146 47.5315 68.5146C46.5935 68.5146 45.6554 68.169 44.9148 67.4284L30.1034 52.617C28.6716 51.1852 28.6716 48.8154 30.1034 47.3836L44.9148 32.5722C46.3466 31.1404 48.7164 31.1404 50.1482 32.5722C51.58 34.004 51.58 36.3738 50.1482 37.8056L41.6563 46.2975H67.2801C69.3043 46.2975 70.9829 47.9761 70.9829 50.0003C70.9829 52.0246 69.3043 53.7032 67.2801 53.7032Z" fill="#F7F0DA"/>
        </svg>
        <h2 className="text-white text-2xl lg:text-4xl">Atrás</h2>
    </div>
    )
  }
  

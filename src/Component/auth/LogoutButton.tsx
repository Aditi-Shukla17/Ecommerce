import { supabase } from '@/utils/supabase';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('access_token');
    // Optionally, you can use Supabase to sign out the user
  //  supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
      Logout
    </button>
  );
};

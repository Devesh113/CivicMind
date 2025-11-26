import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Camera, LayoutDashboard, TrendingUp, Users, Menu, Flame } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function Navbar() {
  const [location, setLocation] = useLocation();
  const [open, setOpen] = useState(false);
  const [showEmergencyDialog, setShowEmergencyDialog] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: null },
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/community", label: "Community", icon: Users },
    { path: "/leaderboard", label: "Leaderboard", icon: TrendingUp },
  ];

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location === item.path;
        return (
          <Link
            key={item.path}
            href={item.path}
            onClick={() => mobile && setOpen(false)}
          >
            <Button
              variant="ghost"
              className={`${mobile ? "w-full justify-start" : ""} ${
                isActive ? "bg-accent" : ""
              }`}
              data-testid={`link-${item.label.toLowerCase()}`}
            >
              {Icon && <Icon className="h-4 w-4 mr-2" />}
              {item.label}
            </Button>
          </Link>
        );
      })}
    </>
  );

  return (
    <>
      <AlertDialog open={showEmergencyDialog} onOpenChange={setShowEmergencyDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-destructive">
              <Flame className="h-5 w-5" />
              Report Fire Emergency
            </AlertDialogTitle>
            <AlertDialogDescription>
              You are about to report a fire emergency. This will immediately alert local fire authorities.
              For life-threatening emergencies, please also call emergency services (911).
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => {
                setLocation("/report?type=fire");
              }}
            >
              Continue to Report
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer" data-testid="link-logo">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <Camera className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">CleanCity</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <NavLinks />
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="destructive"
              className="hidden sm:flex animate-pulse"
              onClick={() => setShowEmergencyDialog(true)}
              data-testid="button-emergency-fire"
            >
              <Flame className="h-4 w-4 mr-2" />
              Fire Emergency
            </Button>
            <Link href="/report">
              <Button
                variant="default"
                className="hidden sm:flex"
                data-testid="button-report-issue"
              >
                <Camera className="h-4 w-4 mr-2" />
                Report Issue
              </Button>
            </Link>
            <ThemeToggle />
            
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" data-testid="button-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col gap-4 mt-8">
                  <NavLinks mobile />
                  <Button
                    variant="destructive"
                    className="w-full animate-pulse"
                    onClick={() => {
                      setOpen(false);
                      setShowEmergencyDialog(true);
                    }}
                    data-testid="button-emergency-fire-mobile"
                  >
                    <Flame className="h-4 w-4 mr-2" />
                    Fire Emergency
                  </Button>
                  <Link href="/report" onClick={() => setOpen(false)}>
                    <Button className="w-full" data-testid="button-report-issue-mobile">
                      <Camera className="h-4 w-4 mr-2" />
                      Report Issue
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      </nav>
    </>
  );
}
